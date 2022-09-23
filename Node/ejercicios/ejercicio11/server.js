import express from 'express';
import devRouter from './routers/dev.js';
import { infoCursos } from './datos/cursos.js';
import { info } from 'console';

const PORT = process.env.port || 4000;

const server = express();

server.use('/api/courses/dev', devRouter);

server.get('/', (req, res) => {
	res.send('You should start your requests with /api/courses/...');
});

server.get('/api/courses', (req, res) => {
	return res.send(infoCursos);
});

server.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
