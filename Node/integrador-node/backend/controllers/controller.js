import Vote from '../models/models.js';
import { min, max, median, medianAbsoluteDeviation } from 'simple-statistics';
import { calcDate } from '../utils/dates.js';

export const saveVote = async (req, res) => {
	try {
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
	} catch (err) {
		return res.json({ message: 'Algo salió mal, reintente' });
	}
};

export const getStats = async (req, res) => {
	try {
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

		return res.status(200).json({
			message: `Se han obtenido los stats de ${stock}`,
			data: response,
		});
	} catch (err) {
		return res.json({ message: 'Algo salió mal, reintente' });
	}
};

export const getMarketPrice = async (req, res) => {
	try {
		const stock = req.params.ticker;
		const date = calcDate();
		let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=${process.env.API_KEY}`;
		const nuevo = await fetch(endpoint);
		const data = await nuevo.json();
		const precio_actual = parseFloat(
			data['Time Series (Daily)'][date]['4. close']
		);

		return res.status(200).json({
			message: `Se obtuvo el precio actual de ${stock}`,
			data: precio_actual,
		});
	} catch (err) {
		return res.json({ message: 'Algo salió mal, reintente' });
	}
};

// getData es una función de prueba para obtener el registro de todos los votos.
export const getData = async (req, res) => {
	const data = await Vote.find();
	return res
		.status(200)
		.json({ message: `Se han obtenido los votos`, data: data });
};
