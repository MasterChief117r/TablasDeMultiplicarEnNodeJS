const fs = require('fs');
const colors = require('colors');
const PDFDocument = require('pdfkit'); // Usamos pdfkit para generar PDFs

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        // Genera la tabla desde 1 hasta el valor de 'hasta'
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        // Si el parámetro listar está presente, muestra la tabla en consola
        if (listar) {
            console.log('|||||||||||||||||||||||||'.green);
            console.log('   TABLA DEL: '.green, colors.blue(base));
            console.log('|||||||||||||||||||||||||'.green);
            console.log(consola);
        }

        // Crear la carpeta 'salida' si no existe
        if (!fs.existsSync('./salida')) {
            fs.mkdirSync('./salida');
        }

        // Generar el archivo PDF
        const doc = new PDFDocument();
        const outputPath = `./salida/tabla-${base}-hasta-${hasta}.pdf`;
        doc.pipe(fs.createWriteStream(outputPath));

        // Añadir el contenido de la tabla al PDF
        doc.font('Helvetica').fontSize(12).text(salida);
        doc.end();

        return `Archivo tabla-${base}-hasta-${hasta}.pdf creado en la carpeta salida`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
