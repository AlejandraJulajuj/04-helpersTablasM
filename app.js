/**
* hacer un programa en consola que imprima la tabla del cinco
de forma automatica
 */

let base = 5
console.clear();

const tabla =(base) =>{
    let resultado = ''
    console.log(`----Tabla del ${base} ----`);
    for (let i = 1; i < 10; i++) {
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    }

    return resultado
}

console.log(tabla(base));

console.clear();
console.log('====================');
console.log('     Tabla del 5    ');
console.log('====================');

for (let i = 1; i < 10; i++) {
    console.log (`${base} x ${i} = ${base * i}`);
}
