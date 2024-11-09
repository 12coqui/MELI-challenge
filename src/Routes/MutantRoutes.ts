import express from 'express';
const router = express.Router();
const { checkForMutant, getStats } = require('../Controllers/MutantController');

router.post('/mutant', checkForMutant);

router.post('/stats', getStats);

module.exports = router;
