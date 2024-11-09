import { Request, Response } from 'express';
import { isMutant } from '../mutantDetector';
const Stats = require('../Models/StatsModel');
const DnaSequence = require('../Models/DnaSequenceModel');

// check if its a mutant
async function checkForMutant(req: Request, res: Response) {
	const { dna } = req.body;
	if (!(dna instanceof Array) || !dna.every((row: string) => row.length === dna.length)) {
		res.status(400).json({ error: 'Invalid DNA Format', dna });
		return;
	}
	const isMutantResult = isMutant(dna);
	console.log({ isMutantResult });
	if (isMutantResult) {
		DnaSequence.create({ dna, isMutant: true });
		res.status(200).json({ message: `This DNA ${dna} correspond to a Mutant` });
		return;
	} else {
		DnaSequence.create({ dna, isMutant: false });
		res.status(403).json({ message: `This DNA ${dna} correspond to a Human` });
		return;
	}
}

// get stats
async function getStats(req: Request, res: Response) {
	res.status(200).json({ message: 'Stats' });
}

module.exports = {
	checkForMutant,
	getStats,
};
