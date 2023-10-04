/**
 * Dando iicio al uso del paquete yars
 */


const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require('yargs').argv

console.clear();

console.log(process.argv);// interno
console.log(argv); //del paquete yargs

