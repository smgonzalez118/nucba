/* Crear un usuario con tus datos:
* Username
* Name
* Age
* List of hobbies (OJO: dice lista de hobbies)
* City
* Student: true or false

Resuelva las respuestas, de la misma manera que se encuentra la primer consigna.
let user = {

}
*/

usuario = {
    "username" : "smgonzalez",
    "name" : "Sebastian",
    "age" : 31,
    "list of hobbies" : ["codear", "tocar guitarra", "hacer gym", "leer"],
    "city" : "La Plata, Buenos Aires",
    "student" : true
}


/*  1. ¿Cómo es tu username? */

console.log(`Ejercicio 2.1.: Mi username es ${usuario["username"]}`)

/*  2. ¿Cómo es tu nombre?*/

console.log(`Ejercicio 2.2.: Mi nombre es ${usuario["name"]}`)


/*  3. ¿Cuál es tu edad?*/

console.log(`Ejercicio 2.3.: Mi edad es ${usuario["age"]}`)

/*  4. ¿Cuáles son tus hobbies? ¿Cuántos tenés?*/

console.log(`Ejercicio 2.4.: Mis hobbies son ${usuario["list of hobbies"]}. Es decir que tengo ${usuario["list of hobbies"].length} hobbies`)

/*  5. ¿Estás estudiando actualmente?*/

let evalua_estudio = (estado) => {
    if (estado === true) {
        return "Sí, soy estudiante"
    } else {
        return "No, no soy estudiante"
    }
}


console.log(`Ejercicio 2.5.: La respuesta es: ${evalua_estudio(usuario["student"])}`)

/*  6.  ¿De dónde sos?*/

console.log(`Ejercicio 2.6.: Soy de la ciudad de ${usuario["city"]}`)