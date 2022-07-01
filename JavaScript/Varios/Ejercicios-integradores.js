/* EJERCICIOS INTEGRADORES - CLASE 8 */

/* - NOMBRE Y OPERACIONES:
Pasos:
Pedir nombre mediante prompt y disparar un alert con algún texto más
Pedir un número y sumarlo a otro que esté en una variable
Pedir un número y restarlo a otro que esté en una variable
Pedir un numero, luego otro y ambos sumarlos */

/*
const ejercicio1 = () => {
    let ingreso = prompt("Ingrese un nombre: ")
    let sumatoria = 0
    alert(`Hola, ${ingreso}, bienvenido al sistema`)
    let num1 = prompt("Ingrese un número para sumar: ")
    sumatoria += num1
    let num2 = prompt("Ingrese un número para restar: ")
    sumatoria -= num2
    let num3 = prompt("Ingrese un número para sumar con el siguiente: ")
    let num4 = prompt("Ingrese un número para sumar con el anterior: ")
    sumatoria2 = parseInt(num3) + parseInt(num4)
    console.log(`La sumatoria de los últimos 2 números es: ${sumatoria2}`)
}

ejercicio1()
*/
/* OK, testeado en https://playcode.io/javascript, funciona bien. No se puede testear acá */



/* -SINTAXIS Y VARIABLES:
Realizar una calculadora que pueda sumar, restar, dividir y multiplicar.
Pasos:
Deberá ingresar un valor mediante un prompt
Deberá ingresar otro valor mediante otro prompt
Mostrar el resultado de cada operación mediante distintos alert */

/* const sumar = (num1, num2) => {
    return alert(`El resultado es: ${num1 + num2}`)
}

const restar = (num1, num2) => {
   return alert(`El resultado es: ${num1 - num2}`)
}

const multiplicar = (num1, num2) => {
    return alert(`El resultado es: ${num1 * num2}`)
}

const dividir = (num1, num2) => {
    return alert(`El resultado es: ${num1 / num2}`)
}


let operacion = prompt("Ingrese el tipo de operación: 'sumar', 'restar', 'dividir', 'multiplicar'")
let ingreso1 = parseInt(prompt("Ingrese el primer número"))
let ingreso2 = parseInt(prompt("Ingrese el segundo número"))
if (operacion === 'sumar') {
  sumar(ingreso1, ingreso2)
} else if (operacion === 'restar') {
  restar(ingreso1, ingreso2)
} else if (operacion === 'multiplicar') {
  multiplicar(ingreso1, ingreso2)
} else if (operacion === 'dividir') {
  dividir(ingreso1, ingreso2)
} else {
  alert("Operación incorrecta")
}

alert("Fin del programa")
 */


/* - DÍAS DE LA SEMANA:
Crear un array con todos los días de la semana
Recorrerlos y mostrar cuando sea domingo o sábado un mensaje en consola. */

/*
weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const recorrer= (arr) => {
	for (let elem in arr) {
  	console.log(`Voy por el ${arr[elem]}`)
    if (weekdays[elem] === "saturday") {
    	console.log("Hoy es sábadooo")
    }
    
    if (weekdays[elem] === "sunday") {
    	console.log("Hoy es domingo....")
    }
  }
}

recorrer(weekdays)

*/



/* INTEGRADOR FÁCIL:
Se tendrá que aplicar todo lo aprendido con los ejercicios anteriores:
Deberá poder ingresar un día de la semana
Deberá poder compararlo con todos los días de la semana
Deberá evaluar si es un día de semana y fin de semana mediante un mensaje similar a: "El día es hábil" sino "El día es fin de semana";
En caso de encontrar el día utilizar la sentencia break y terminar el for. */

/*

let user_day = prompt("Enter a week day: 'monday', 'tuesday', 'wednesday', 'thusrday', 'friday', 'saturday' or 'sunday'")

const labor_days = ['monday', 'tuesday', 'wednesday', 'thusrday', 'friday']
const weekend = ['saturday', 'sunday']

if (labor_days.includes(user_day)) {
	console.log("The day entered is labor_day")
} else if (weekend.includes(user_day)) {
	console.log("The day entered is weekend day")
} else {
	console.log("The day entered is not a day or the program doens't understand it")
}

*/


/* PEQUEÑAS FUNCIONES:
Crear una función que pida nombre y apellido y lo muestre en la consola.
Crear una función que en base a un parámetro muestre los días hábiles o de fines de semana en consola. */

/*
const request_data = () => {
	let first_name = prompt("Enter your firstname")
  let last_name = prompt("Enter your lastname")
  console.log(`The name entered is ${first_name + " " + last_name}`)
}

const show_days = (day_type) => {
	const labor_days = ['monday', 'tuesday', 'wednesday', 'thusrday', 'friday']
	const weekend = ['saturday', 'sunday']
  if (day_type === 'labor') {
		console.log(labor_days)
  } else if (day_type === 'weekend') {
		console.log(weekend)
  } else {
  	console.log("Not a day")
  }
}

request_data()
day_entered = prompt("Enter a type of day: labor or weekend")
show_days(day_entered)
*/


/* CREAR UN ARRAY DE PELÍCULAS:
Crear una función que agregue una película al array de películas
La película deberá tener un ID y un Título
Crear una función que evalúe antes de agregar que la película no fue ingresada previamente
Crear una función que ordene las películas por Título y por ID
Crear una función que elimine una película por su ID. */

/*
let films = []

const add_film = (films, id, title) => {
	let object = {"id" : id, "title" : title}
  films.push(object)
}

const add_film2 = (films, id, title) => {
	let object = {"id" : id, "title" : title}
  let exists = 0
  for (let index in films) {
  	if (films[index]["id"] === id) {
    	exists = 1
    }
  }
  if (exists === 0) {
  	 films.push(object)
  }
}

const delete_film = (films, id) => {
	for (let index in films) {
  	if (films[index]["id"] === id) {
    	films.splice(index, 1)
    }
  }
}

/*
add_film(films, 1, "Titanic")
add_film(films, 2, "King Kong")
add_film(films, 3, "Harry Potter")

add_film2(films, 1, "Titanic")
add_film2(films, 1, "Titanic")
add_film2(films, 1, "Titanic")
add_film2(films, 2, "Harry Potter")
console.log(films)
delete_film(films, 2)
console.log(films)

*/

// OTRA SOLUCIÓN:

/*
CREAR UN ARRAY DE PELÍCULAS:
Crear una función que agregue una película al array de películas
La película deberá tener un ID y un Título
Crear una función que evalúe antes de agregar que la película no fue ingresada previamente
Crear una función que ordene las películas por Título y por ID
Crear una función que elimine una película por su ID.


class Coleccion {
	constructor(nombre) {
		this.nombreColeccion = nombre,
		this.peliculas = []
	}
	
	agregarPelicula(id, titulo) {
		if (!this.peliculas.map(obj => obj["id"]).includes(id)) {
			this.peliculas.push({id, titulo})
			console.log(`Pelicula agregada ${id} - ${titulo}`)
		} else {
			console.log(`La película ${id} - ${titulo} ya fue ingresada anteriormente`)
		}
	}
	
	ordenarPeliculas(campo) {
		if (campo === "id") {
			return this.peliculas.sort((a, b) => {return a.id - b.id})
		} else if (campo === "titulo") {
			return this.peliculas.sort((a, b) => {
				if (a.titulo > b.titulo) {
					return 1
				} else if (a.titulo < b.titulo) {
					return -1
				} else {
					return 0
				}
			})
		} else {
			console.log("Valor incorrecto")
		}
	}
	
	eliminarPelicula(id) {
		for (let obj in this.peliculas) {
			if (this.peliculas[obj].id === id) {
				this.peliculas.splice(obj, 1)
			}
		} 
	}
}

coleccion1 = new Coleccion("Colección 1")
coleccion1.agregarPelicula("1", "Lord of the Rings")
coleccion1.agregarPelicula("2", "Harry Potter")
console.log(coleccion1.peliculas)
coleccion1.agregarPelicula("0", "Willy Wonka")
console.log(coleccion1.ordenarPeliculas("id"))
console.log(coleccion1.peliculas)
coleccion1.eliminarPelicula("1")
console.log(coleccion1.peliculas)
*/




/* MEJORAR LA CALCULADORA SEPARANDO EN FUNCIONES CADA OPERACIÓN:
Deberá poder ingresar 2 valores
Deberá poder ingresar que operación quiere realizar
Cada operación tendrá que ser una función con los 2 parámetros para sumar, restar, multiplicar o dividir;
Deberá mostrar el resultado de la operación en consola. */

/* const sumar = (num1, num2) => {
    return alert(`El resultado es: ${num1 + num2}`)
}

const restar = (num1, num2) => {
   return alert(`El resultado es: ${num1 - num2}`)
}

const multiplicar = (num1, num2) => {
    return alert(`El resultado es: ${num1 * num2}`)
}

const dividir = (num1, num2) => {
    return alert(`El resultado es: ${num1 / num2}`)
}


let operacion = prompt("Ingrese el tipo de operación: 'sumar', 'restar', 'dividir', 'multiplicar'")
let ingreso1 = parseInt(prompt("Ingrese el primer número"))
let ingreso2 = parseInt(prompt("Ingrese el segundo número"))
if (operacion === 'sumar') {
  sumar(ingreso1, ingreso2)
} else if (operacion === 'restar') {
  restar(ingreso1, ingreso2)
} else if (operacion === 'multiplicar') {
  multiplicar(ingreso1, ingreso2)
} else if (operacion === 'dividir') {
  dividir(ingreso1, ingreso2)
} else {
  alert("Operación incorrecta")
}

alert("Fin del programa")

*/



/* HACER UN OBJETO QUE REPRESENTE UN AUTO:
Deberá tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad máxima
Deberá tener los métodos encender, acelerar, mostrar velocidad actual, frenar y apagar
Por lo tanto mediante el método acelerar tendrá que ir aumentando
la velocidad hasta llegar a la velocidad máxima. */

/*
const auto = {
	'color' : 'rojo',
  'modelo' : '2013',
  'patente' : 'GST355',
  'marca' : 'Ford',
  'prendido' : 0,
  'velocidad' : 0,
  'velocidadMaxima' : 100,

  encender : () => {
  	auto.prendido = 1
  },
  acelerar : () => {
  	auto.velocidad += 10
  },
  mostrarVelocidadActual : () => {
  	console.log(auto.velocidad)
  },
  frenar : () => {
  	if (auto.velocidad > 0)
    auto.velocidad -= 10
  },
  apagar : () => {
  	auto.prendido = 0
  }
}


console.log(`El estado actual del vehículo es ${auto.prendido}`)
console.log('Enciendo el vehículo')
auto.encender()
console.log(`El estado actual del vehículo es ${auto.prendido}`)
console.log(`La velocidad actual es de ${auto.velocidad}`)
console.log('Acelero')
while (auto.velocidad < auto.velocidadMaxima) {
	auto.acelerar()
}
console.log(`La velocidad actual, luego de pisarlo, es de ${auto.velocidad}`)
console.log('freno el auto')
while (auto.velocidad > 0) {
	auto.frenar()
}
console.log(`La velocidad actual, luego de frenarlo, es de ${auto.velocidad}`)
console.log("apago el auto")
auto.apagar()
console.log(`El estado actual del vehículo es ${auto.prendido}`)
console.log("Programa terminado")

*/
/* AVERIGUAR POR QUÉ NO ME DEJA USAR "THIS" !!!!!!! */


/* CREAR UNA FUNCIÓN QUE AGREGUE OBJETOS, PELÍCULAS:
El objeto película Deberá tener ID, titulo, descripción, año, duración, actores, director
Deberá tener métodos para editar todas sus propiedades, menos su ID, y para los actores tendrá que ir agregando uno a uno. */

/*
class Pelicula {
  constructor(id, titulo, descripcion, año, duracion, actores, director) {
    this.id = id
    this.titulo = titulo
    this.descripcion = descripcion
    this.año = año
    this.duracion = duracion
    this.actores = actores
    this.director = director
  }

  cambia_titulo(nuevo_titulo) {
    this.titulo = nuevo_titulo
  }

  cambia_descripcion(descripcion) {
    this.descripcion = descripcion
  }

  cambia_año(año) {
    this.año = año
  }

  cambia_duracion(duracion) {
    this.duracion = duracion
  }

  reemplaza_actores(actores) {
    this.actores = actores
  }

  agrega_actor(nuevo_actor) {
    this.actores.push(nuevo_actor)
  }

  cambia_director(director) {
    this.director = director
  }
  
}

let peliculas = new Pelicula(
  id="1", 
  titulo="Harry Potter", 
  descripcion="Es una peli",
  año=2002,
  duracion=120,
  actores=["Harry", "Ron", "Hermione"],
  director="Spielberg"
)

console.log(peliculas)
peliculas.cambia_titulo("Harry Potter DOS")
peliculas.cambia_año("2022")
peliculas.agrega_actor("Malfoy")
console.log(peliculas)

*/

/* CREAR UNA FUNCIÓN PARA CARGAR AUTOS EN UN CAMIÓN:
El auto tendrá que tener al menos patente y peso
El camión tiene un peso máximo de carga
El objeto camión deberá validar con cada auto ingresado si está por debajo del peso o si ya no lo puede agregar
Además de almacenar los autos debe tener la posibilidad de validar que
no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo. */

/*
class Camion {
  constructor(pesoMaximo) {
    this.autos = []
    this.pesoMaximo = pesoMaximo
    this.cargaActual = 0
  }

  cargarAuto(patente, peso) {
    let arr = [patente, peso]
    
    if (((this.cargaActual + peso) <= this.pesoMaximo)
    && !this.autos.includes(arr)) {
      this.autos.push(arr)
      this.cargaActual += peso
    } else {
      console.log("No alcanza la capacidad para almacenar el vehículo o bien ya está a bordo")
    }
  }

  obtenerPatentes() {
    let lista_patentes = []
    for (let index in this.autos) {
      lista_patentes.push(this.autos[index][0])
    }
    console.log(lista_patentes)
  }
}

let camion1 = new Camion(pesoMaximo=1000)
camion1.cargarAuto("BUD729", 500)
console.log(camion1)
camion1.obtenerPatentes()
camion1.cargarAuto("IUX434", 400)
console.log(camion1)
camion1.obtenerPatentes()
camion1.cargarAuto("ISS514", 300)
console.log(camion1)
camion1.obtenerPatentes()

*/