import { arrayLinksFile } from './file.js';

const fetch = require('node-fetch');
// const path = require('path');
// Validando un link
export const validateLink = (route) => {
  const linksArrayFile = arrayLinksFile(route);// array de objetos
  const arrayPromises = linksArrayFile.map((object) => new Promise((resolve) => {
    fetch(object.href).then((res) => {
      const objectNew = { ...object };
      if (res.status >= 200 && res.status < 400) {
        objectNew.status = res.status;
        objectNew.statusText = res.statusText;// OK
        resolve(objectNew);
      } else {
        objectNew.status = res.status;
        objectNew.statusText = 'Fail';// FAIL
        resolve(objectNew);
      }
    }).catch(() => {
      const objectNew = { ...object };
      objectNew.status = 'Error';
      objectNew.statusText = 'Este link no existe';
      resolve(objectNew);
    });
  }));
  return Promise.all(arrayPromises);// devuelve una promesa que termina correctamente
};

// validateLink(path.join(process.cwd(), './test/prueba/pruebita')).then((res) => console.log(res));
