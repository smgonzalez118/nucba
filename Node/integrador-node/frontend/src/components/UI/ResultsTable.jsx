import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { desc } from './descs';

function ResultsTable(props) {
	const [stats, setStats] = useState({});
	const [marketPrice, setMarketPrice] = useState(null);

	// NEXT FETCH GET VOTE STATS (MEDIAN ESTIMATES)

	const handleGetStats = async () => {
		try {
			const data = await fetch(
				`https://bluequantum-backend3.onrender.com/api/v1/votes/${props.ticker}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const json = await data.json();
			const stats = await json.data;
			setStats(stats); // <--- GOT STATS
		} catch (error) {
			console.warn('Server error');
		}
	};

	useEffect(() => {
		handleGetStats();
	}, []);

	// NEXT FETCH GET MARKET DATA (PRICE)

	const handleGetMarketPrice = async () => {
		try {
			const data = await fetch(
				`http://localhost:5000/api/v1/votes/price/${props.ticker}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const json = await data.json();
			const price = await json.data;
			setMarketPrice(price); // <--- GOT MARKET PRICE
		} catch (error) {
			console.warn('Server error');
		}
	};

	useEffect(() => {
		handleGetMarketPrice();
	}, []);

	return (
		<>
			<h2 id='table-title'> ACTIVO: {desc[props.ticker]} </h2>
			<h3> PRECIO ACTUAL: {marketPrice} </h3>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Horizonte</th>
						<th>Precio estimado</th>
						<th> Variación estimada </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Corto</td>
						<td>{stats.medianST}</td>
						<td>
							{marketPrice
								? Math.round(
										(stats.medianST / marketPrice - 1) * 100
								  ).toString() + '%'
								: ''}
						</td>
					</tr>
					<tr>
						<td>Medio</td>
						<td>{stats.medianMT}</td>
						<td>
							{marketPrice
								? Math.round(
										(stats.medianMT / marketPrice - 1) * 100
								  ).toString() + '%'
								: ''}
						</td>
					</tr>
					<tr>
						<td>Largo</td>
						<td>{stats.medianLT}</td>
						<td>
							{marketPrice
								? Math.round(
										(stats.medianLT / marketPrice - 1) * 100
								  ).toString() + '%'
								: ''}
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}

export default ResultsTable;
