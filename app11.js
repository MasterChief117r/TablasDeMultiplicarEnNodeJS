/**
 * Ejercicio - operando la aplicación con yargs inicial
 * Aca se tiene configurado que se puede capturar -b o --base y que se pueda
 * crear la tabla deaseada en un archivo mediante peticiones en consola
 * por ejemplo node app1 --base=10, esto crea el archivo de la tabla del 10
 * Dando inicio al uso del paquete yargs
 */

//Utiliza la versión de multiplicar3.js que se encuentra en helpers
const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true; //Esta es la parte mas importante para lanzar la validacion
                })
                .argv

console.clear();

console.log(argv);

//Se agregó el trabajo específico con la base b y se dispara el error si no es numero.

crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err))

/**
 * Uso de yargs, ver el resultado de escribir enconsola
 * 
 * node app11 -b 17
 * node app11 --base=17
 */