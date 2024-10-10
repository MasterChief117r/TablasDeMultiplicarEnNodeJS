/**
 * Ejercicio - package.json - init - install - uninstall
 * Dando inicio al uso del paquete yargs
 */

/**
 * Utilizando NPM para hacer el siguietne ejercicio vsitar la página NPM
 * sitio web: npmhs.com, esto paquetes ayudan a no reinventar la rueda
 * pero hay que tener cuidad y bscar los más utilizdos y seguros 
 * por ejemplo ver el paquete colors npmjs.com/package/colors y examianr su uso
 * ¿Cómo lo instalo y cómo le digo a mi aplicación que lo voy a utilizar?
 * ¿Si comparto el código como sabe la otra persona que paquete utilice y que versión?
 * CUando utilizamos paquetes de tercero debemos preparar el proyecto.
 * 
 * 1 - npm init
 * Para instalar los paquetes por defecto
 * Si se quiere contestar a todo si se puede utilizar una bandera.
 * package name: dejar el nombre que le coloca o cambiarlo
 * version: 0.0.1
 * description: En una tabla de multipliar con archivo de text
 * Entry point: app9.js
 * test commando: se deja vacío, pero sirve para hacaer pruebas unitarias y de integración
 * git repositorio: dejar vacío
 * keywords: vacío, pero sirve para que el usuario pueda buscar si  aplicación por estas palabras
 * author: Royer Tzep
 * license: MIT
 * Is this OK? Presionar enter 
 * 
 * se genero dentro del proyecto el archivo package.json
*/

/**
 * Archvio PACKAGE.JSON
 * Examinar este archivo en su carpeta
 * version: no se puede regresar a versiones anteriores
 * Este archivo es el punto inicial de cualquier proyecto de NODE
 * y dice que comandos podemos utilizar para operar la aplicación por ejemplo
 * test
 * se agrega en script base3 = node app9.js -base=3
 * luego guardar y corrrer npm run base3
 * verificar que main: app9.js
 * npm run base3
 */

/**
 * Instalcion de paquete de colors
 * npm install colors
 * En las dependencias de package.json se puede verificar la instalación de la dependencia de colors en mi caso la version  
 * También ahora existe el archivo package.json aqui dice como se contruyeron las
 * dependencias
 * También se creo la carpeta node_modules se tiene las dependencias en si,
 * podría instalar dependencias que solo me sirven para desarrollo y no para
 * produccion como por ejemplo nodemon
 * npm nodemon install --save-dev
 * para comprobar visitar el package.json y ahora aparece un devDependencies alli aparece npm uninstall nodemon
 * En mi caso como no tengo la version actualzada de colors voy a desisntalarla
 * nmp uninstall colors
 * instalare ahora la version especifica
 * npm i colors@1.0.4
 * si se quiere actualizar los paquetes
 * npm update
 */

/**
 * Instalacion del paquete yargs https://www.npmjs.com/package/yargs
 * npm install yargs
 */

const {crearArchivo} = require('./helpers/multiplicar3');
const argv = require('yargs').argv; //Requerimos YARGS

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs', argv.base);

/**
 * 
 * Utilizar
 * 1- node app9
 * 2- node app9 --base=3
 * 
 *Que hace YARGS veamos primero que viene primero de process.arv, node app9 --base=3
 *
 * [
*  'D:\\OTROS\\PROGRAMAS\\NODE\\node.exe',
*  'D:\\OTROS\\ETC\\MIUMG\\2024\\SEMESTRE 8\\DESARROLLO WEB\\UNIDAD3\\CODIGO\\04-bases-node\\app9'
*  ]
 * 
 * Si analizamos todo lo recoge como un String pero YARGS es más eficiente
 * y ve los tipos de datos y variables como sigue
 * { _: [], '$0': 'app9' }
 * Con esto ya no necesito cortarlo, no se necesita el split, etc
 * node app0 -b 5 -1
 * node app9 --base=5 --listar
 * 
 * También ayuda a documentar la aplicación como sigue se puede dar una idea
 * node app9 --help, esto sin yargs no funcionaria
 * Options:
 * --help show help
 * --version show version number
 * 
 * node app9 --version
 */

/**
  * Uso de yargs, ver el resultado de escribir en consola
  * node app9 --base=5 --limite=10
  */