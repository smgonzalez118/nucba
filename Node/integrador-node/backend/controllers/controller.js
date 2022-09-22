import Vote from '../models/models.js';
import { min, max, median, medianAbsoluteDeviation } from 'simple-statistics';

export const saveVote = async (req, res) => {
	const { ticker, targetPriceST, targetPriceMT, targetPriceLT } = req.body;
	const newVote = await Vote.create({
		ticker,
		targetPriceST,
		targetPriceMT,
		targetPriceLT,
	});
	return res
		.status(200)
		.json({ message: 'Voto creado exitosamente', data: newVote });
};

export const getStats = async (req, res) => {
	const stock = req.params.ticker;
	const Votes = await Vote.find({ ticker: stock });
	const STVotes = [];
	const MTVotes = [];
	const LTVotes = [];

	Votes.map((vote) => {
		STVotes.push(vote.targetPriceST);
		MTVotes.push(vote.targetPriceMT);
		LTVotes.push(vote.targetPriceLT);
	});
	const medianST = median(STVotes);
	const medianMT = median(MTVotes);
	const medianLT = median(LTVotes);
	const response = {
		medianST: medianST,
		medianMT: medianMT,
		medianLT: medianLT,
	};

	return res
		.status(200)
		.json({ message: `Se han obtenido los stats de ${stock}`, data: response });
};

export const getMarketPrices = async (req, res) => {
	return null;
};

// getData es una función de prueba para obtener el registro de todos los votos.
export const getData = async (req, res) => {
	const data = await Vote.find();
	return res
		.status(200)
		.json({ message: `Se han obtenido los votos`, data: data });
};
