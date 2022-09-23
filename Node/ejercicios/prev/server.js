import express from 'express';
import { cursos } from './cursos.js';

const PORT = process.env.PORT || 4000;
const server = express();

//express.json();

server.get('/', (req, res) => {
	res.send('BIENVENIDO A LA WEB DE CURSOS');
});

server.get('/', (req, res) => {
	const resultado = cursos;
	res.send(resultado);
});

server.get('/programacion', (req, res) => {
	const resultado = cursos.programacion;
	res.send(resultado);
});

server.get('/matematica', (req, res) => {
	const resultado = cursos.matematica;
	res.send(resultado);
});

server.get('/programacion/:nivel', (req, res) => {
	const nivel = req.params.nivel;
	const resultado = cursos.programacion.filter(
		(curso) => curso.nivel === nivel
	);
	res.send(resultado);
});

server.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
