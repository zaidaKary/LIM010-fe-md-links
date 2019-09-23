import { convertPathAbs } from './path.js';

const path = require('path');
const fs = require('fs');
const marked = require('marked');
// Verificando si es o no un archivo
export const verifyFile = (route) => fs.statSync(route).isFile();
// Verificando si es la extension de un archivo markdown
export const isMarkdown = (route) => {
  if (path.extname(route) === '.md' || path.extname(route) === '.markdown') {
    return true;
  }
  return false;
};
// console.log(verifyFile('./test/prueba/markdown.md'));
// export const readDir = (route) => fs.readdirSync(route);
// console.log(readDir('./test/prueba'));
// Recorre todos los archivos de las carpetas con extensión .md y lo almacena en un array
export const saveArrayPathFile = (route) => {
  let arrayFile = [];
  const routeAbs = convertPathAbs(route);
  if (verifyFile(routeAbs)) { // si es un archivo
    if (isMarkdown(routeAbs)) { // si es un archivo .md
      arrayFile.push(routeAbs); // rellenando el array con las rutas absolutas
    }
  } else {
    const arrayDirectory = fs.readdirSync(routeAbs);
    arrayDirectory.forEach((element) => {
      const arrayFolder = saveArrayPathFile(path.join(routeAbs, element));
      arrayFile = arrayFile.concat(arrayFolder);
    });
  }
  return arrayFile;
};
// console.log(saveArrayPathFile('./test/prueba'));
// Lee el contenido de un archivo
export const readFile = (route) => fs.readFileSync(route, 'utf8');
// console.log(readFile('./test/prueba/pruebita/link.md'));
// Obteniendo los links de las rutas absolutas en una array de objetos (href, text, file)
export const arrayLinksFile = (route) => {
  const linksArrayFile = [];
  const arrayFile = saveArrayPathFile(route);
  arrayFile.forEach((pathFile) => {
    const readingFile = readFile(pathFile);
    const render = new marked.Renderer();
    render.link = (href, title, text) => {
      linksArrayFile.push({
        href,
        text,
        file: pathFile,
      });
    };
    marked(readingFile, { renderer: render });
  });
  return linksArrayFile;
};
// console.log(arrayLinksFile('test/prueba/pruebita/link.md'));
