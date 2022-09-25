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
		try {
			const save = fetch('https://bluequantum-backend3.onrender.com/api/v1/votes/save', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(vote),
			});
			setVoted(true);
			document.querySelector('.sentimental-form').style.display = 'none';
		} catch (error) {
			console.warn('Error al enviar el POST vote');
		}
	};

	return (
		<section className='search sentimental-section' id='search'>
			<form className='search sentimental-form' onSubmit={(e) => send(e)}>
				<span id='instruccion-consenso'>
					{' '}
					{
						'Coloque su estimación de precio para los distintos horizontes temporales y le arrojaremos la estimación de consenso del mercado (mediana de las estimaciones)'
					}
				</span>
				<select name='ticker' id='list-tickers' onChange={handleData}>
					{listTickers}
				</select>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceST'
					placeholder='Corto plazo'
					onChange={handleData}
				/>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceMT'
					placeholder='Medio plazo'
					onChange={handleData}
				/>
				<input
					type='number'
					className='input__price-estimate'
					name='targetPriceLT'
					placeholder='Largo plazo'
					onChange={handleData}
				/>

				<input type='submit' value='ENVIAR' id='consensus-send' />
			</form>
			<div> {voted ? <ResultsTable ticker={vote.ticker} /> : ''} </div>
		</section>
	);
};

export default FormCarga;
