const path = require('path'); //trabajando con rutas de archivos y directorios
const namePath = path.basename('C://temp//myfile.html');
const convertPathAbs = path.resolve('./test/prueba/prueba.js');//convierte a ruta absoluta
console.log(namePath);

console.log(convertPathAbs);