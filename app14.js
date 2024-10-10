/**
 * Ejercicio - configurar la documentación de la aplicación
 * para utilizarla se aplica el comandonode app14 --help
 * Utilizará el mulitplicar4.js que tendrá la opcion
 * para aceptar de parámetro la bandera -l --listar
 * 
 * Utiliza el YARGS 2 que tiene una modificación en una
 * mejor descripción en las bandera a la hora de utilizar
 * el help
 */

/**
 * Se cortó la lógica de Yargs y se pasó a la carpeta que se creo llamada
 * "config" dentro de config se creo un archivo llamado yargs.js por lo tanto
 * en este archivo app13.js se hace un require a yargs que esta en la carpeta
 * antes mencionada.
 */

const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));