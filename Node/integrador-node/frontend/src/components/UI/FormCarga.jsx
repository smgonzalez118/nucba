import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ResultsTable from './ResultsTable';

const FormCarga = (props) => {
	const desc = {
		ABT: 'Abbott Laboratories',
		ABBV: 'AbbVie Inc.',
		ACN: 'Accenture plc',
		GOOG: 'Alphabet Inc. (Google) Clase C',
		AMZN: 'Amazon.com, Inc.',
		AAPL: 'Apple Inc',
		BAC: 'Bank of America Corporation',
		'BRK.A': 'Berkshire Hathaway Inc.',
		BMY: 'Bristol-Myers Squibb Company',
		AVGO: 'Broadcom Inc.',
		CVX: 'Chevron Corporation',
		CSCO: 'Cisco Systems, Inc.',
		KO: 'Coca-Cola Company (The)',
		COST: 'Costco Wholesale Corporation',
		DHR: 'Danaher Corporation',
		LLY: 'Eli Lilly and Company',
		XOM: 'Exxon Mobil Corporation',
		HD: 'Home Depot, Inc. (The)',
		JNJ: 'Johnson & Johnson',
		JPM: 'JP Morgan Chase & Co.',
		MA: 'Mastercard Incorporated',
		MCD: 'McDonalds Corporation',
		MRK: 'Merck & Company, Inc.',
		META: 'Meta Platforms, Inc.',
		MSFT: 'Microsoft Corp.',
		MS: 'Morgan Stanley',
		NEE: 'NextEra Energy, Inc.',
		NKE: 'Nike, Inc.',
		NVDA: 'NVIDIA Corporation',
		ORCL: 'Oracle Corporation',
		PEP: 'PepsiCo, Inc.',
		PFE: 'Pfizer, Inc.',
		PM: 'Philip Morris International Inc',
		PG: 'Procter & Gamble Company (The)',
		CRM: 'Salesforce, Inc.',
		TSLA: 'Tesla, Inc.',
		TXN: 'Texas Instruments Incorporated',
		TMO: 'Thermo Fisher Scientific Inc',
		TMUS: 'T-Mobile US, Inc.',
		UPS: 'United Parcel Service, Inc.',
		UNH: 'UnitedHealth Group Incorporated',
		VZ: 'Verizon Communications Inc.',
		V: 'Visa Inc.',
		WMT: 'Walmart Inc.',
		DIS: 'Walt Disney Company (The)',
		WFC: 'Wells Fargo & Company',
	};

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

	const [voteData, setVote] = useState({});
	const [voted, setVoted] = useState(false);

	const listTickers = tickers.map((ticker) => (
		<option value={ticker}>{desc[ticker]}</option>
	));

	const send = async (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/api/v1/votes/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(voteData),
		});
		setVoted(true);
	};

	return (
		<form>
			<select
				name='list-tickers'
				id='list-tickers'
				onChange={(e) => setVote({ ...voteData, ticker: e.target.value })}
			>
				{listTickers}
			</select>
			<input
				type='number'
				className='input__price-estimate'
				placeholder='Estimación de corto plazo'
				onChange={(e) => setVote({ ...voteData, shortPrice: e.target.value })}
			/>
			<input
				type='number'
				className='input__price-estimate'
				placeholder='Estimación de medio plazo'
				onChange={(e) => setVote({ ...voteData, midPrice: e.target.value })}
			/>
			<input
				type='number'
				className='input__price-estimate'
				placeholder='Estimación de largo plazo'
				onChange={(e) => setVote({ ...voteData, longPrice: e.target.value })}
			/>

			<input type='submit' onClick={(e) => send()} />
			<div>
				{() => {
					if (voted) {
						return <ResultsTable ticker={voteData.ticker} />;
					}
				}}
			</div>
		</form>
	);
};

export default FormCarga;
