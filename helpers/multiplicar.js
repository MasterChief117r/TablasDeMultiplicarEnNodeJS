//Este archivo tiene la lógica para que funcione el archivo app4.js
const fs = require('fs')

/**
 * Se utiliza el modulo.exports para dar permiso a este archivo
 * de exportar crearArchivo hasta el final de este archivo.
 */

//Funcion que tiene por objeto crear la tabla de la base sugerida y
//por default imprimirá y generará la tabla del cinco, sino se ingresaran el parámetro base
const crearArchivo = (base = 5) => {

    console.log('||||||||||||||||||||||');
    console.log(`   TABLA DEL: `, base  );
    console.log('||||||||||||||||||||||')

    let salida = '';

    for (let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
}

//Module.exports es exclusivo de NODE no funciona del lado del cliente es decir el navegador
//en el navegador se utiliza el export
module.exports = {
    crearArchivo
}