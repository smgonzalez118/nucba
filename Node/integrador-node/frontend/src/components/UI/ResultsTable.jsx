import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { desc } from './descs';

function ResultsTable(props) {
	const [stats, setStats] = useState({});
	const [marketPrice, setMarketPrice] = useState(null);

	// NEXT FETCH GET VOTE STATS (MEDIAN ESTIMATES)
	useEffect(async () => {
		const data = await fetch(
			`http://localhost:5000/api/v1/votes/${props.ticker}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const json = await data.json();
		const stats = json.data;
		setStats(stats); // <--- GOT STATS
	}, []);

	// NEXT FETCH GET MARKET DATA (PRICE)
	useEffect(async () => {
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
		const price = json.data;
		setMarketPrice(price); // <--- GOT MARKET PRICE
	}, []);

	return (
		<>
			<h2> ACTIVO: {desc[props.ticker]} </h2>
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
						<td>Corto plazo</td>
						<td>{stats.medianST}</td>
						<td>{(marketPrice / stats.medianST - 1) * 100}</td>
					</tr>
					<tr>
						<td>Medio plazo</td>
						<td>{stats.medianMT}</td>
						<td>{(marketPrice / stats.medianMT - 1) * 100}</td>
					</tr>
					<tr>
						<td>Largo plazo</td>
						<td>{stats.medianLT}</td>
						<td>{(marketPrice / stats.medianLT - 1) * 100}</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}

export default ResultsTable;
