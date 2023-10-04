/**
 * Dando inicio el uso del proyecto yars
 */

const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require ('yargs')
.option('b', {
    alias: 'base',
    type: 'number'
})
.argv

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs', argv.base);

/**
 * uso del yargs, ver el resultado de escribir no conosla
 * node app9 --base5 --limite=10
 */