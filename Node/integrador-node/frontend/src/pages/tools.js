import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ResultsTable from '../components/UI/ResultsTable';
import FormCarga from '../components/UI/FormCarga';
import { dateFormat } from '../utils/dateFormat';

const Tools = () => {
	let $lastday = useRef();
	let $precio_actual = useRef();
	let $mediaMovil20d = useRef();
	let $recomendacion = useRef();
	let $ticker = useRef();
	const [ticker, setTicker] = useState(null);
	const [tool, setTool] = useState('sentimental');

	async function getRecomend() {
		setTicker($ticker.current.value.toUpperCase());
		let [date, lastday] = dateFormat();
		const API_KEY = 'LT6OSQ25CS08KJTY';
		let endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
		/*const FERIADOS = [{dia: 17, mes: 1}, {dia: 21, mes: 2}, {dia: 15, mes: 4}, {dia: 30, mes: 5}, {dia: 19, mes: 6},
        {dia: 4, mes: 7}, {dia: 5, mes: 9}, {dia: 24, mes: 11}, {dia: 26, mes: 12}]*/

		//let date = (f.getFullYear()) + "-" + formatea(f.getMonth()+1) + "-" + formatea(f.getDate())
		//date = "2022-07-01"
		const nuevo = fetch(endpoint)
			.then((data) => data.json())
			.then((data) => {
				console.log(String(data));
				let precio_actual = parseFloat(
					data['Time Series (Daily)'][date]['4. close']
				);
				let suma = 0;
				let contador = 0;
				for (let fecha in data['Time Series (Daily)']) {
					let precio = data['Time Series (Daily)'][fecha]['4. close'];
					suma += parseFloat(precio);
					contador += 1;
					if (contador === 20) {
						break;
					}
				}

				let precio_7d = 0;
				let recomendacion = '';
				let mediaMovil20d = parseFloat((suma / 20).toFixed(2));

				if (precio_actual > mediaMovil20d) {
					recomendacion = 'COMPRA';
					$recomendacion.current.classList.add('verde');
				} else {
					recomendacion = 'VENTA';
					$recomendacion.current.classList.add('rojo');
				}

				$precio_actual.current.textContent = `PRECIO ACTUAL: $ ${precio_actual}`;
				$mediaMovil20d.current.textContent = `MEDIA MÓVIL DE 20 DÍAS: $ ${mediaMovil20d}`;
				$recomendacion.current.textContent = recomendacion;
				if (lastday === 1) {
					$lastday.current.textContent =
						'Nota: el precio de cierre corresponde al cierre anterior';
				} else {
					$lastday.current.textContent = '';
				}
			})
			.catch(function () {
				$lastday.currenttextContent =
					'Ticker incorrecto o información financiera no disponible';
				$precio_actual.current.textContent = ``;
				$mediaMovil20d.current.textContent = ``;
				$recomendacion.current.textContent = ``;
			});
	}

	if (tool == 'recommend') {
		return (
			<>
				<div className='command-section'>
					<input type='button' value='RECOMENDACIÓN' />
					<input
						type='button'
						value='SENTIMIENTO DE MERCADO'
						onClick={() => setTool('sentimental')}
					/>
				</div>

				<section className='search' id='search'>
					<form className='search__form'>
						<h2 className='title'>
							{' '}
							ANÁLISIS DE ACTIVOS DE RENTA VARIABLE (ACCIONES){' '}
						</h2>
						<p>
							{' '}
							Busque un activo financiero por su ticker y le brindaremos un
							estado de situación del mismo
						</p>

						<input
							type='text'
							name='user'
							onBlur={getRecomend}
							id='ticker'
							ref={$ticker}
							placeholder='TICKER'
						/>
						<input
							type='button'
							onClick={getRecomend}
							value='BUSCAR'
							id='login__form-button'
						/>

						<div className='results'>
							<div
								className='precio'
								id='precioActual'
								ref={$precio_actual}
							></div>
							<div
								className='precio'
								id='mediaMovil20d'
								ref={$mediaMovil20d}
							></div>
							<div id='recomendacion' ref={$recomendacion}></div>
							<div id='lastday' ref={$lastday}></div>
						</div>
					</form>
				</section>
			</>
		);
	} else if (tool === 'sentimental') {
		return (
			<>
				<div className='command-section'>
					<input
						type='button'
						value='RECOMENDACIÓN'
						onClick={() => setTool('recommend')}
					/>
					<input type='button' value='SENTIMIENTO DE MERCADO' />
				</div>
				<FormCarga />
			</>
		);
	}
};

export default Tools;
