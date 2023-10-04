/** 
 * Aca manda a llamar la destructuracion de multiplicar.ks
 * que ahora ya tiene permisos para improtar crearArchivo
*/

const {crearArchivo} = require('./helpers/multiplicar')

/**
 * se creo la carpeta helpers para crear toda la logica
 * de la aplicacion en un archivo dentro de est carpeta llamado
 * multiplicar.js
 */

console.clear();

const base = 5

crearArchivo(base);