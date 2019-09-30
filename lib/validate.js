"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = void 0;

var _file = require("./file.js");

const fetch = require('node-fetch'); // const path = require('path');
// Validando un link


const validateLink = route => {
  const linksArrayFile = (0, _file.arrayLinksFile)(route); // array de objetos

  const arrayPromises = linksArrayFile.map(object => new Promise(resolve => {
    fetch(object.href).then(res => {
      const objectNew = { ...object
      };

      if (res.status >= 200 && res.status < 400) {
        objectNew.status = res.status;
        objectNew.statusText = res.statusText; // OK

        resolve(objectNew);
      } else {
        objectNew.status = res.status;
        objectNew.statusText = 'Fail'; // FAIL

        resolve(objectNew);
      }
    }); // .catch(() => {
    //   const objectNew = { ...object };
    //   objectNew.status = 'Este link no existe';
    //   objectNew.statusText = 'Fail';
    //   resolve(objectNew);
    // });
  })); // retorna un arreglo con los valores de cada una de las promesas (cuando todas
  // las promesas son exitosas)
  // retorna el error de la promesa rechazada (cuando una de las promesas es rechazada)

  return Promise.all(arrayPromises); // devuelve una promesa que termina correctamente
}; // validateLink(path.join(process.cwd(), './test/prueba/pruebita')).then((res) => console.log(res));
// validateLink(path.join(process.cwd(), './test/prueba2')).then((res) => console.log(res));


exports.validateLink = validateLink;