import fs from 'fs';

export const createFile = () => {
	fs.writeFileSync('./archivo.txt', 'un textoO');
};

export const appendText = () => {
	fs.appendFileSync('./archivo.txt', '\r\notro texto debajoOOOOOOOOO');
};
