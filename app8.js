const {crearArchivo} = require('./helpers/multiplicar3')

console.clear();

//CAPTURANDO EL TERCER AGUMENTO, se ingresa en consola node app8 --base=5
const [, , arg3= 'base=5'] = process.argv;
const[, base =5]= arg3.split('=')

//se puede comprobar sin argumnto node app8

//esto tiene muchos inconbenientes ya que acepta cualquier tipo de parametros
//por ejemplo node app8 --limite=40 --base=10, hace la talba del 40 por ejemplo

crearArchivo(base)
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))

//para correr el app8 es necesario ingresar lo siguiente node app8 --base=12 en console

