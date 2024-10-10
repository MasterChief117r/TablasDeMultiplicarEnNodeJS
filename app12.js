/**
 * Ejercicio - Agregar opcion -l o --listar
 * Utilizará el multiplicar4.js que tendrá la opcion
 * Para aceptar de parámetro la bandera -l --listar
 * listar sirve para impimir en consola, si no se elige entonces
 * solo creará el archivo.
 */

const { option } = require('yargs')
const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'number',
                    demandOption: true,
                    default: false
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv
console.clear();

console.log(argv);

//Se envian dos argumentos el valor de base que es numerico y listar que es booleano
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

/**
 * La aplicación en este punto hace lo siguiente
 * crear la tabla del 66 y listarla node app12 --base=66 --listar
 * node app12 -b 66 -l
 * 
 * crear la tabla 66 sin imprimir en consola
 * node app12 -b 66
 * node app12 --base=66
 */