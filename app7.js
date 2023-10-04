/**
 * Aca se manda a llamar a destructuracion de multiplicar3.js
 * que ahora ya tiene permisos para improtar crearAcrhvo
 * aca se transformo en promesas las funciones flehca pero 
 * utilizando el Async y el await
 */

const {crearArchivo} = require('./helpers/multiplicar3')

/**
 * se creo la carpeta herlpers para crear toda la logica
 * de la aplicacion en un archivo dentro de esta carpeta llamada
 * multiplicar.js
 */

console.clear();

console.log(process.argv);

//capturando el tercer argmento, e ingresa en consola node app7 --base=5
const[, , arg3 ='base=5']= process.argv;
const[, base=5]= arg3.split('=')
console.log(base);
//se puede comprobar sin argumentos node app7

/**
 * el proyecto posterior trata de crear documentacion y poder trabajar desde la consola
 * esta aplicacion es decir, que por ejemplo en la linea de comandos se ingrea
 * los isguite: node app7 --base=9 limit= 12, entonces haara las tablas
 * del 9 al 12 por ejemplo, tambien se puede usar para saber informacion de la pp
 * por ejemplo su veriosn o banderas que sepueden utilizar en la aplicacion
 */