import moongoose from 'mongoose';
const Schema = moongoose.Schema;

const StatsSchema = new Schema({
	count_mutant_dna: { type: Number, default: 0 },
	count_human_dna: { type: Number, default: 0 },
	ratio: { type: Number, default: 0 },
});

module.exports = moongoose.model('Stats', StatsSchema);
