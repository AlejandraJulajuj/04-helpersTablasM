const fs = require('fs')
const colors = require('colors')//utiliza colores

const limpiarColores = (texto) => {
    // Expresión regular para eliminar los códigos de colores ANSI
    const expresionRegular = /\x1b\[[0-9;]*m/g;
    return texto.replace(expresionRegular, '');
  };

 // utiliza una expresión regular para eliminar los códigos de colores ANSI de una cadena de texto. 



const crearArchivo=async(base=5,listar=false, hasta=10,)=>{
    try{
        
       
  //no sirve para crear las tablas y llegar al limite propuesto 
  console.clear(); 
  let salida ='', consola='' ;                     //usando los parametros 1 de base y el otro del limite
                        
      
        for(let i=1; i<=hasta; i++){
            
          salida += `${base} x ${i} = ${base * i} \n`
          consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`
        }
    
        if(listar){     //si listar es true despliega la lista del contenido en consola
            console.log('---------------------'.green);
            console.log(`  Tabla del `.green,colors.blue(base));  //aplicamos propiedades de color
            console.log('---------------------'.green);
            console.log(colors.blue(consola));
         
        }


        fs.writeFileSync(`/04-helpers/salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

} catch(err){
    throw err;
}
}

//ponemos la funcion en disposicion de otros modulos
module.exports = {
    crearArchivo
}