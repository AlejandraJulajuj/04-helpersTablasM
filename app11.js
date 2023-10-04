/**
 * Dando inicio al uso del paquete yars
 */

const {crearArchivo} = require('./helpers/multiplicar3')
const { option } = require('yargs')

.option('b', {
    alias: 'base',
    type: 'number',
    demandOption:true
})
.check((argv, options)=>{
    if (isNaN (argv.b)) {
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.argv

console.clear();
console.log(argv);

//se agrego el trabajo espeficio co la base b y se dispara el error si no es numero

crearArchivo(argv.b)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err=> console.log(err))

/**
 * uso de yargs, verel resultado de escribir me consola
 * node app11 --bae=5 --limite =10
 */

