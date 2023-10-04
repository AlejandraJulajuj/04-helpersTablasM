/*const fs = require ('fs')

/**
 * se utiliza el modulo.exports para dar permiso a estte archivo
 * de exportar crearArchivo hasa el final de este archivo
 * aqui se agregar el listar
 
*/
 const crearArchivo = async(base = 5, listar=false)=>{
    try{
        let salida= '';

        for (let i = 1; i < 10; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        if(listar){
            console.log('====================');
            console.log('     Tabla del'.green, colors.blue(base));
            console.log('====================', green);
            console.log(salida);
        }
     
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
        } catch(err){
            throw err
        }
    }
    
    
    module.exports ={
        crearArchivo
    }












 