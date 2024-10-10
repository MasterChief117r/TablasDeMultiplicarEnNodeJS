# Aplicación de Tablas de Multiplicar

Esta aplicación genera las tablas de multiplicar en formato PDF hasta un valor especificado con la bandera `--hasta`, y puede mostrar las tablas en la consola si se indica con la opción `--listar`.

## Opciones

- `--base` o `-b`: Especifica la base de la tabla de multiplicar.
- `--listar` o `-l`: Muestra la tabla en consola.
- `--hasta` o `-h`: Define hasta qué número se generará la tabla.

## Ejemplo de uso

Este es un ejemplo de cómo usar la aplicación para generar la tabla de multiplicar del número 5 hasta el 12 y mostrarla en consola:

```bash
node app16 --base=5 --hasta=12 --listar

