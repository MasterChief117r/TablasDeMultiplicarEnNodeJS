/**
 * Ejercicio - configurando YARGS
 * er la documentación de Yargs en https://yargs.js.org/
 * buscar en la pagina el uso de .option(Key, [opt])
 * var argv = require ('yargs/yargs')(process.argv.slice(2))
 *  option('f), {
 *      alias: 'files',
 *      demandOption: true,
 *      default: '/etc/passwd',
 *      describe: 'x marks the spot'
 *      type: 'string'
 * }
 * .argv
 * ;
 * 
 * 
 * 
 * Dando inicio al uso del paquete yargs
 */

const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require('yargs')
    .option('b', {
        alias:'base',
        type:'base',
        demandOption: true
    })
    .check((argv, option) => { 
        if( isNaN(argv.b)){
            //NaN = Not a Number
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs', argv.b);

/**
 * Uso de yargs, ver el resultado de escribir en consola
 * node app10 --base=5 --limite=10
 * node app10 --base=abc
 * node app10 -b 5
 * node app10
 * 
 * Documentar que pasa en cada caso, de lo planteado en las lineas anteriores
 */