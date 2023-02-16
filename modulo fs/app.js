const fs = require('fs');

// leer un archivo
 
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        console.log(err)
    } else {
        console.log(contenido);
    }
    console.log('Mensaje...')
});

// Cambia el nombre de un archivo

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;

    }
    console.log('Nombre cambiado con exitosamente');
});

// agregar contenido al final de un archivo

fs.appendFile('main.html', '<p>Hola mundo</p>', (err) => {
    if(err) {
        throw err;
    }
    console.log('archivo actualizado')
});

fs.writeFile('main.html', 'contenido nuevo', (err) => {
    if (err) {
        throw err
    }
    console.log('Contenido remplazado exitosamente')
});

// Eliminar archivo

fs.unlink('main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado exitosamente');
});