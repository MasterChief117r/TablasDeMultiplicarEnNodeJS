const fs = require('fs')

/**
 * Ejercicio - Utrilizando una función async
 * Trabajando con el archivo app6.js
 * Se utiliza el module.exports para dar permiso a este archivo
 * de exportar crearArchivo hasta el final de este archivo.
 */
const crearArchivo = async(base = 5) => {
    try {
        console.log('|||||||||||||||||||||||||');
        console.log('   TABLA DEL: ', base     );
        console.log('|||||||||||||||||||||||||');

        let salida = '';

        for (let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}