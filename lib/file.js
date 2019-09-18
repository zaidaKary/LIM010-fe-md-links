"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveArrayPathFile = exports.isMarkdown = exports.verifyFile = void 0;

var _path = require("./path.js");

const path = require('path');

const fs = require('fs'); // Verificando si es o no un archivo


const verifyFile = route => fs.statSync(route).isFile(); // Verificando si es la extension de un archivo markdown


exports.verifyFile = verifyFile;

const isMarkdown = route => {
  if (path.extname(route) === '.md' || path.extname(route) === '.markdown') {
    return true;
  }

  return false;
}; // console.log(verifyFile('./test/prueba/markdown.md'));
// export const readDir = (route) => fs.readdirSync(route);
// console.log(readDir('./test/prueba'));


exports.isMarkdown = isMarkdown;

const saveArrayPathFile = route => {
  let arrayFile = [];

  if (verifyFile((0, _path.convertPathAbs)(route))) {
    // si es un archivo
    if (isMarkdown((0, _path.convertPathAbs)(route))) {
      // si es un archivo .md
      arrayFile.push((0, _path.convertPathAbs)(route)); // rellenando el array con las rutas absolutas
    }
  } else {
    const arrayDirectory = fs.readdirSync((0, _path.convertPathAbs)(route));
    arrayDirectory.forEach(element => {
      const arrayFolder = saveArrayPathFile(path.join((0, _path.convertPathAbs)(route), element));
      arrayFile = arrayFile.concat(arrayFolder);
    });
  }

  return arrayFile;
};

exports.saveArrayPathFile = saveArrayPathFile;
console.log(saveArrayPathFile('./test/prueba'));