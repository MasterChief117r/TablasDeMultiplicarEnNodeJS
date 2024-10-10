/**
 * Ejercicio - Conversión a función promesa a Async en multiplicar3.js
 * ---------------------MEJORANDO EL CODIGO OPCION 2 ----------------
 * Aca se manda a llamar la destructuración de multiplicar3.js
 * que ahora ya tiene permisos para importar crearArchivo
 * Se transformo la promesa en una función tipo Aync una función
 * asincroma para que se ejecute más optimamente que la promesa.
 * Esta función Aync maneja el exito con el try y el error con carch
 */

const {crearArchivo} = require('./helpers/multiplicar3')

/**
 * Se creo la capeta helpers para crear toda la logica
 * de la aplicacion en un archivo dentro de esta carpeta llamado
 * multiplicar.js
 */

console.clear();

const base = 2

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))