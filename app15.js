const {crearArchivo} = require('./helpers/multiplicar4')
const colors = require('colors')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

/**
 * Tarea: Modificar la aplicación para que acepte otra bandera llamada --hasta o -h
 * 1- Arregle el problema de los colores en el archivo de texto
 * - Agregar --hasta o -h para decir hasta que tabla legará la aplicación
 * Ejemplo node app16 --base=1 --hasta=10 -l
 * Da como resultado el despliegue en consola de las tablas del hasta el 10 en consola
 * y también eistirá un archivo que diga tabla-1-hasta-10.txt
 * Las tablas se deben de desplegar de una forma agradable y coherente
 */