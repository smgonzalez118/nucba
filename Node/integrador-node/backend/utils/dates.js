export const calcDate = () => {
	let f = new Date();
	function formatea(fecha) {
		fecha = fecha.toString();
		if (fecha.length === 1) {
			return `0${fecha}`;
		} else {
			return fecha;
		}
	}

	let date = '';
	if (f.getDay() == 0) {
		date =
			f.getFullYear() +
			'-' +
			formatea(f.getMonth() + 1) +
			'-' +
			formatea(f.getDate() - 2);
		return date;
	} else if (f.getDay() == 7) {
		date =
			f.getFullYear() +
			'-' +
			formatea(f.getMonth() + 1) +
			'-' +
			formatea(f.getDate() - 1);
		lastday = 1;
		return date;
	} else if (f.getHours() < 21) {
		if (f.getDay() == 0) {
			date =
				f.getFullYear() +
				'-' +
				formatea(f.getMonth() + 1) +
				'-' +
				formatea(f.getDate() - 2);
			lastday = 1;
			return date;
		} else if (f.getDay() == 1) {
			date =
				f.getFullYear() +
				'-' +
				formatea(f.getMonth() + 1) +
				'-' +
				formatea(f.getDate() - 3);
			lastday = 1;
			return date;
		} else {
			date =
				f.getFullYear() +
				'-' +
				formatea(f.getMonth() + 1) +
				'-' +
				formatea(f.getDate() - 1);
			return date;
		}
	} else {
		date =
			f.getFullYear() +
			'-' +
			formatea(f.getMonth() + 1) +
			'-' +
			formatea(f.getDate());
		return date;
	}
};
