import { Router } from 'express';
import {
	saveVote,
	getStats,
	getMarketPrice,
	getData,
} from '../controllers/controller.js';
// los controllers son el segundo argumento de los verbos http del router.

const router = Router();

//api/v1/votes
router.get('/:ticker', getStats);
router.post('/save', saveVote);
router.get('/data', getData);
router.get('/price/:ticker', getMarketPrice);

export { router as mainRouter };
