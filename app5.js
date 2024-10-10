/**
 * Ejercicio - Conversión a función promesa en multiplicar2.js
 * -----------------------------MEJORANDO EL CODIGO OPCION 1-------------------------
 * Aca se manda a lllamar la destructuración de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivo
 * aca se transforma en Promesas las funciones flecha.
 */
const {crearArchivo} = require('./helpers/multiplicar2')

/**
 * Se creo la carpeta helpers para crear toda la lógica
 * de la aplicación en un archivo dentro de esta carpeta llamado
 * multiplicar.js
 */

console.clear();

const base = 21

/**
 * Cuando se utiliza el .then sirve para ejecutar el resolve de la Promesa (éxito)
 * Cuando se utiliza el .catch sirve para ejecutar el reject de la promesa (error)
 */
crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err))