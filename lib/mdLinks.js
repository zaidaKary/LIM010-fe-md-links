"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./path.js");

var _file = require("./file.js");

var _validate = require("./validate.js");

// const path = require('path');
const mdLinks = (route, options) => new Promise(resolve => {
  // convirtiendo a ruta absoluta
  const routeAbs = (0, _path.convertPathAbs)(route);

  if (options && options.validate === true) {
    // validando link (href, text, file, status, statusText)
    resolve((0, _validate.validateLink)(routeAbs));
  } else {
    // Obteniendo los links en una array de objetos (href, text, file)
    resolve((0, _file.arrayLinksFile)(routeAbs));
  }
}); // mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: true }).then((res) => {
//   console.log(res);
// });
// mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: false }).then((res) => {
//   console.log(res);
// });


exports.mdLinks = mdLinks;