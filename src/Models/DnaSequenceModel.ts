const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DnaSequenceSchema = new Schema(
  {
    dna: Array,
    isMutant: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('DnaSequence', DnaSequenceSchema);
