import express from 'express';
const router = express.Router();
import { checkForMutant, getStats } from '../Controllers/MutantController';

router.post('/mutant', checkForMutant);

router.post('/stats', getStats);

export { router };
