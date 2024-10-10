//Ejercicio - Requerir paquetes internos
//Importar archivos a nuestro proyecto utilizando writeFile
const fs = require('fs') //requiere para poder operar archivos

/**
 * En este ejercicio se desea evolucionar la aplicación para que
 * se puede imprimir cualquier base para la tabla de multiplicar
 * y luego de imprimir en consola se genere un archivo .txt con
 * el nombre de la tabla y sus datos en un archivo es necesario
 * utilizar el paquete interno File System (fs) y el método writeFile
 * 
 * */

 //Algo interesante de NODE es que podemos operar archivos es decir podemos
 //crear, modificar y eliminar archivos por medio de NODE

 /**
  * EN este caso se pretende imprimir la tabla de multiplicar en un archivo
  * Visitar la página oficila de NODE: https://nodejs.org/en e ir a la documentación
  * de la version mas actual.
  * Visitar https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
  * https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#:~:text=position%5B%2C%20encoding%5D%5D%2C%20callback)-,fs.writeFile(file%2C%20data%5B%2C%20options%5D%2C%20callback),fs.writev(fd%2C%20buffers%5B%2C%20position%5D%2C%20callback),-Synchronous%20API
  */

const base = 14
let salida = '';

console.clear();
console.log('||||||||||||||||||||||');
console.log(`   TABLA DEL: ${base}  `);
console.log('||||||||||||||||||||||');

for (let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado con writeFile`);
})