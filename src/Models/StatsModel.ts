import moongoose from 'mongoose';
const Schema = moongoose.Schema;

const StatsSchema = new Schema({
	count_mutant_dna: Number,
	count_human_dna: Number,
	ratio: Number,
});

module.exports = moongoose.model('Stats', StatsSchema);
