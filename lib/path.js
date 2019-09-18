"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPathAbs = exports.validatePath = exports.existPath = void 0;

const path = require('path'); // trabajando con rutas de archivos y directorios


const isValidPath = require('is-valid-path');

const fs = require('fs'); // Verificando la existencia de la ruta


const existPath = route => {
  if (fs.existsSync(route)) {
    return true;
  }

  return false;
}; // Validando la ruta (Devuelve true si una ruta de archivo no contiene caracteres no válidos)


exports.existPath = existPath;

const validatePath = route => {
  if (isValidPath(route)) {
    return true;
  }

  return false;
}; // Convirtiendo la ruta


exports.validatePath = validatePath;

const convertPathAbs = route => {
  if (!path.isAbsolute(route)) {
    return path.resolve(route);
  }

  return route;
};

exports.convertPathAbs = convertPathAbs;