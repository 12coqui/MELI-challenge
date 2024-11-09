import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  count_mutant_dna: { type: Number, default: 0 },
  count_human_dna: { type: Number, default: 0 },
  ratio: { type: Number, default: 0 },
});

module.exports = mongoose.model('Stats', StatsSchema);
