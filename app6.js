/**
 * Aca de manda a llamar la destructuracion de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivo
 */

const{crearArchivo} = require('./helpers/multiplicar3')

/**
 * se creo la carpeta helpers para crear toda la pagina
 * de la aplicacion en un archivo dentro de esta carpeta llamda
 * multiplicar.js
 */

console.clear();

const base=2

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))

/**
 * Elproyecto posterior trata de crear documentacion ypoder trabajar desde la consola
 * esta apicacion es decir, que por ejmplo en la linea de comandos se ingressa
 * lo siguiente: node app7 --base=9 limit=12, entonces hara las tablas del 
 * 9 al 12 por ejemplo. tamien se peude usar para saber informacion de la app
 * por ejemplo su version o banderas que se puedenutilizar en la aplicacion
 */