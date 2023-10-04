/**
 * se agrega und escribe para que en la ayuda dle uso de la app con help
 * describa de mejor forma la apolicacion

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    //default: false, se quita ya que esta por default en la app prncipal
    describe: 'muestra la tabla en consola'
})
.check((argv, options)=> {
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true;
})
.argv

module.exports =argv;

*/

const argv = require('yargs')   //usar la variable argv para configurar y acceder a los argumentos de línea de comandos.

.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'
})

.option('h',{
    alias:'hasta',
    type: 'number',
    demandOption: true,
    describe: ' limite de iteraciones'
})

.option('l',{
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    describe: 'muestra la tabla en consola'
    //default:false              se quita ya que esta por default en la app principal
})

.check((argv,options)=>{
    if(isNaN(argv.b && argv.h)){
        throw 'la base tiene que ser un numero'
    }
    return true
})

.argv

module.exports = argv
