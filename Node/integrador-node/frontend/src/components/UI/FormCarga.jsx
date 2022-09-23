import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ResultsTable from './ResultsTable';
import { desc } from './descs';

const FormCarga = (props) => {
	console.log('Componente montado');
	const tickers = [
		'ABT',
		'ABBV',
		'ACN',
		'GOOG',
		'AMZN',
		'AAPL',
		'BAC',
		'BRK.A',
		'BMY',
		'AVGO',
		'CVX',
		'CSCO',
		'KO',
		'COST',
		'DHR',
		'LLY',
		'XOM',
		'HD',
		'JNJ',
		'JPM',
		'MA',
		'MCD',
		'MRK',
		'META',
		'MSFT',
		'MS',
		'NEE',
		'NKE',
		'NVDA',
		'ORCL',
		'PEP',
		'PFE',
		'PM',
		'PG',
		'CRM',
		'TSLA',
		'TXN',
		'TMO',
		'TMUS',
		'UPS',
		'UNH',
		'VZ',
		'V',
		'WMT',
		'DIS',
		'WFC',
	];

	const voteData = {};
	const [vote, setVote] = useState({});
	const [voted, setVoted] = useState(false);

	const handleData = (e) => {
		vote[e.target.name] = e.target.value;
	};

	const listTickers = tickers.map((ticker) => (
		<option value={ticker} key={ticker}>
			{desc[ticker]}
		</option>
	));

	const send = async (e) => {
		e.preventDefault();
		const save = fetch('http://localhost:5000/api/v1/votes/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(vote),
		});
		setVoted(true);
	};

	return (
		<section className='search' id='search'>
			<form className='search' onSubmit={(e) => send(e)}>
				<select name='ticker' id='list-tickers' onChange={handleData}>
					{listTickers}
				</select>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceST'
					placeholder='Estimación de corto plazo'
					onChange={handleData}
				/>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceMT'
					placeholder='Estimación de medio plazo'
					onChange={handleData}
				/>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceLT'
					placeholder='Estimación de largo plazo'
					onChange={handleData}
				/>

				<input type='submit' value='ENVIAR!' />
			</form>
			<div> {voted ? <ResultsTable ticker={vote.ticker} /> : ''} </div>
		</section>
	);
};

export default FormCarga;
