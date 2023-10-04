const { crearArchivo } = require ("./helpers/multiplicar4")
const argv= require ("./config/yargs2.js")

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
.then (nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))
