/**
 * Ejercicio - Configuración de Yargs Independientemente
 * Utilizará el multiplicar4.js que tendrá la opción
 * para aceptar de parámetro la bandera -l --listar
 */

/**
 * Se cortó toda la lógica de Yargs y se pasó a la carpeta que se creo llamada
 * "config" dentro de config se creo un archivo llamado yargs.js por lo tanto
 * en este archivo app13.js se hace un require a yargs que esta en la carpeta
 * antes mencionada.
 */

const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('./config/yargs') //Se requiere el archivo yargs.js que esta en config
//pero se iguala a un objeto llamado argv para que no cambie ninguna lógica

console.clear();

console.log(argv)

crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(`Archivo ${nombreArchivo} creado.`) )
                .catch(err => console.log(err))

/**
 * La aplicación en este punto hace lo siguiente
 * crear la tabla del 66 y listarla node app12 --base=66 --listar
 * node app12 -b 66 -l
 * 
 * crear la tabla 66 sin imprimir en consola
 * node app13 -b 66
 * node app13 --base=66
 */