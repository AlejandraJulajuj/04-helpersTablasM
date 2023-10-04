/**
 * utilizar el multiplicar4.js que tendra la opcion
 * para aceptar de parametro la badner -l --listar
 */

/**
 * se corto toda la logica de yargs ys e paso a la carpeta que se 
 * creo llamada config dentro de ocnfig se creo un archivo llamado yargs.js por lo tanto
 * en este archivo app12.js e hace un requirea yargs que esta en la carpta
 * ates mencionada
 */

const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('./config/yargs')

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))