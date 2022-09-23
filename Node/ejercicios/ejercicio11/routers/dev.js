import express from 'express';
import { infoCursos } from '../datos/cursos.js';

const devRouter = express.Router();
devRouter.use(express.json());

devRouter.get('/', (req, res) => {
	const resultado = infoCursos['programacion'];
	return res.send(resultado);
});

devRouter.get('/:language', (req, res) => {
	const language = req.params.language;
	const result = infoCursos['programacion'].filter(
		(courses) => courses.lenguaje === language
	);
	if (result) {
		return res.send(result);
	} else {
		return res.send("We couldn't find any results.");
	}
});

devRouter.get('/:language/:level', (req, res) => {
	const language = req.params.language;
	const level = req.params.level;
	const result = infoCursos['programacion'].filter(
		(course) => course.lenguaje === language && course.nivel === level
	);
	if (result) {
		res.send(result);
	} else {
		res.send("We couldn't find any results.");
	}
});

devRouter.post('/', (req, res) => {
	const newCourse = req.body;
	infoCursos['programacion'].push(newCourse);
	return res.send({ message: 'New course added!', data: newCourse });
});

devRouter.put('/:id', (req, res) => {
	const modifiedCourse = req.body;
	const courseIndex = infoCursos['programacion'].findIndex(
		(curso) => curso.id === req.params.id
	);

	infoCursos['programacion'][courseIndex] = modifiedCourse;

	return res.send({
		message: 'Course modified succesfully!',
		Newdata: infoCursos['programacion'],
	});
});

devRouter.delete('/:id', (req, res) => {
	const courseIndex = infoCursos['programacion'].findIndex(
		(curso) => curso.id === req.params.id
	);
	const deletedCourse = infoCursos['programacion'][courseIndex];
	infoCursos['programacion'].splice(courseIndex, 1);
	return res.send({
		message: 'Course deleted!',
		deletedCourse: deletedCourse,
	});
});

export default devRouter;
