/**
 * Aca de mandaa llamar la destructuracion de multiplicar2.js
 * que ahora ya tiene permisos para improtar crearArchivo
 * aca de transforomo en Promesas las funciones fleca
 */

const { crearArchivo } = require("./helpers/multiplicar2")

/**
 * Se creo la carpeta helpers para crear toda la iglesia
 * d ela apoicacion en un archivo dentro de esta carpeto llamada
 * multiplicar.js
 */

console.clear();

const base = 3

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))