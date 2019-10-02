import { convertPathAbs, existPath } from './path.js';
import { arrayLinksFile } from './file.js';
import { validateLink } from './validate.js';

// const path = require('path');
// funcion de mdlinks
export const mdLinks = (route, options) => new Promise((resolve, reject) => {
  if (existPath(route)) {
    // convirtiendo a ruta absoluta
    const routeAbs = convertPathAbs(route);
    if (options && options.validate === true) {
      // validando link (href, text, file, status, statusText)
      resolve(validateLink(routeAbs));
    } else {
      // Obteniendo los links en una array de objetos (href, text, file)
      resolve(arrayLinksFile(routeAbs));
    }
  } else {
    reject(new Error('La ruta no existe'));
  }
});
// mdLinks(path.join(process.cwd(), './test/pruebaa'), { validate: true }).then((res) => {
//   console.log(res);
// }).catch((error) => console.log(error.message));
// mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: false }).then((res) => {
//   console.log(res);
// });
