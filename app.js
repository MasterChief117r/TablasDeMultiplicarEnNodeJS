/**
 * Ejercicio - inicio de nuestro proyecto, crear una aplicación que imprima en
 * consola la tabla del cinco, trate de ralizarla por sus medios y compare
 * el resultado de su lógica contra lo resuelto aca
 * 
*/
/**
 * Hacer un programa en consola que imprima la
 * Tbla de lcinco de forma automática
 * 5 * 1 = 5
 * 5 * 2 = 10
 * 5 * 3 = 15
 * .
 * .
 * .
 * 5 * 10 = 50
 */

/**
 * Para ejecutar la aplicación es necersario llevar la consola a la carpeta 
 * donde se encuentra este proyecto 04-Fundamentos y ejecutar el siguiente comando
 * 
 * node app
 * 
 * 
 */

//La variable base sirve para indicar sobre que base vamos a realizar
//la tabla de multiplicar

let base = 5
console.clear(); //Borra la pantalla

const tabla = (base) => {
    let resultado = ''
    console.log(`----Tabla del ${base} ----`);
    for (let i = 1; i <= 10; i++){
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    }
    return resultado
}

console.log(tabla(base));

//Mi primera versión propuesta
//console.clear();
//console.log('====================');
//console.log(' TABLA DEL: 5')
//console.log('====================');

//for (let i = 1; i <= 10; i++){
//  console.log(`${base} x ${i} = ${base * i}`);
//}