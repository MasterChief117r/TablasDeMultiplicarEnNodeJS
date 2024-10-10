//Ejercicio - importar archivos a nuetro proyecto
//Utilizando el writeFileSync
const fs = require('fs');

/**
 * En este ejercicio se desea evolucionar la aplicación para que
 * se puede imprimir cualquier base para la tabla de multiplicar
 * y luego de imprimir en consola se genere un archivo .txt con 
 * el nombre de la tabla y sus datos.
 * Para poder crear y guradar datos en un archivo es necesario utilizar
 * el paquete interno File System (fs) y el método writeSync que es
 * mucho mas sencillo y óptimo que el writeFile
 */

const base = 16
let salida = '';

console.clear();
console.log('||||||||||||||||||||||');
console.log(`   TABLA DEL: ${base}    `);
console.log('||||||||||||||||||||||');

for (let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);
fs.writeFileSync(`tabla-${base}.txt`, salida)
console.log(`tabla-${base}.txt creado con writeFileSync`);