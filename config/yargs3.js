const argv = require('yargs')   //usar la variable argv para configurar y acceder a los argumentos de línea de comandos.

.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
   
})

.option('l',{
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
 
    //default:false              se quita ya que esta por default en la app principal
})

.option('h',{
    alias:'hasta',
    type: 'number',
    default: 10,
    describe: "Este es elnumero hasta donde quieres la tabla"
})

.check((argv,options)=>{
    if(isNaN(argv.b && argv.h)){
        throw 'la base tiene que ser un numero'
    }
    return true
})

.argv

module.exports = argv
