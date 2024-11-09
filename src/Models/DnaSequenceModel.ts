const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const DnaSequenceSchema = new Schema(
	{
		dna: Array,
		isMutant: Boolean,
	},
	{ timestamps: true }
);

module.exports = moongoose.model('DnaSequence', DnaSequenceSchema);
