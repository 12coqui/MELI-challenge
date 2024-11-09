import { Request, Response } from 'express';
import { isMutant } from '../mutantDetector';
const Stats = require('../Models/StatsModel');
const DnaSequence = require('../Models/DnaSequenceModel');

// check if its a mutant
async function checkForMutant(req: Request, res: Response) {
  try {
    const { dna } = req.body;
    // validate dna
    if (
      !(dna instanceof Array) ||
      !dna.every((row: string) => row.length === dna.length)
    ) {
      res.status(400).json({ error: 'Invalid DNA Format', dna });
      return;
    }
    // check if dna is mutant or human
    const isMutantResult = isMutant(dna);

    if (isMutantResult) {
      await DnaSequence.create({ dna, isMutant: true });
      await Stats.updateOne(
        {},
        { $inc: { count_mutant_dna: 1 } },
        { upsert: true }
      );
    } else {
      await DnaSequence.create({ dna, isMutant: false });
      await Stats.updateOne(
        {},
        { $inc: { count_human_dna: 1 } },
        { upsert: true }
      );
    }

    const stats = await Stats.findOne();
    if (stats) {
      const ratio =
        stats.count_human_dna === 0
          ? 1
          : stats.count_mutant_dna / stats.count_human_dna;
      await Stats.updateOne({}, { ratio }, { upsert: true });
    }

    if (isMutantResult) {
      res
        .status(200)
        .json({ message: `This DNA ${dna} correspond to a Mutant` });
    } else {
      res
        .status(403)
        .json({ message: `This DNA ${dna} correspond to a Human` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// get stats
async function getStats(req: Request, res: Response) {
  try {
    const stats = await Stats.findOne();
    if (stats) {
      res.status(200).json(stats);
    } else {
      res.status(404).json({ message: 'Stats not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export { checkForMutant, getStats };
