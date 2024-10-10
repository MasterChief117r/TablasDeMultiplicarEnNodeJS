/**
 * Ejercicio - Recibir información desde la línea de comandos
 * Aca se manda a llamar la destructuración de multiplicar3.js
 * Ejemplos de trabajar con líneas de comandos por ejemplo
 * nodemon --version
 * Se ejecuto el comando principal de nodemon y estamos enviando la bandera
 * --version la aplicación sabe qu hacer cuando se envía la bandera no se
 * ejecuta el comando de nodemon si no que se ejecute la información de la versión
 * 
 * 
 * 
 */

const {crearArchivo} = require('./helpers/multiplicar3')

/**
 * Codigo comentado para hacer el ejercicio de el process.argv
 * Que se requiere hacer que trabajemos con la línea de comandos para operar la aplicación
 * por ejemplo utilizar node app.js --base=3 por ejemplo
 * o por ejemplo --base=3 --limite=10
 * Que pasa si escribo node app6 --base-9
 */
console.clear();

//const base = 2

//crearArchivo(base)
//  .then(nombreArchivo => console.log(nombreArchivo, 'creado))
//  .catch(err => console.log(err, ')
console.log(process.argv); //Imprime los procesos que vienen de la consola

/**
 * Codigo comentado para hacer el ejercicio de el process.argv
 * Probar agregando en consola node app7 --base=5
 * 'D:\OTROS\ETC\MIUMG\2024\SEMESTRE 8\DESARROLLO WEB\UNIDAD3\CODIGO\04-bases-node\\app7',
 * --base=5
 */

//CAPTURANDO EL TERCER ARGUMENTO, se ingresa en consola node app7 --base=5
//ingresar en consola node app7
const [, , arg3='base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
console.log(base);
//Se puede comprobar sin aargumentos node app7

/**
 * El proyecto posterior trata de crear documentación y poder trabajar desde la consola
 * esta aplicación es decir, que por ejemplo en la linea de comandos se ingresa
 * lo siguiente: node app7 --base=9 limit=12, entonces hara las tablas
 * del 9 al 12 por ejemplo. También se puede usar para saber información de la App
 * por ejemplo su versión o banderas que se pueden utilizar en la aplicación.
 */