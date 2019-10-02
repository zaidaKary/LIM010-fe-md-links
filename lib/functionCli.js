"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionCli = void 0;

var _mdLinks = require("./mdLinks.js");

var _stats = require("./stats.js");

const functionCli = matrix => {
  let output = '';

  if (matrix.length === 0) {
    output = new Promise(resolve => resolve('Ingrese una ruta, por ejemplo: md-links ./some/example.md\n'));
  }

  if (matrix.length === 1) {
    return (0, _mdLinks.mdLinks)(matrix[0]).then(res => (0, _stats.formatOutput)(res));
  }

  if (matrix.length === 2) {
    if (matrix[1] === '--stats' || matrix[1] === '--s') {
      output = (0, _mdLinks.mdLinks)(matrix[0], {
        validate: true
      }) // no es necesario poner el { validate: true }
      .then(res => (0, _stats.stats)(res));
    } else if (matrix[1] === '--validate' || matrix[1] === '--v') {
      output = (0, _mdLinks.mdLinks)(matrix[0], {
        validate: true
      }).then(res => (0, _stats.formatOutput)(res));
    } else {
      output = new Promise(resolve => resolve('Comando incorrecto!!!'));
    }
  }

  if (matrix.length === 3) {
    if (matrix[1] === '--validate' && matrix[2] === '--stats' || matrix[1] === '--stats' && matrix[2] === '--validate') {
      output = (0, _mdLinks.mdLinks)(matrix[0], {
        validate: true
      }).then(res => (0, _stats.statValidate)(res));
    } else {
      output = new Promise(resolve => resolve('Comandos incorrectos!!!'));
    }
  }

  return output;
};

exports.functionCli = functionCli;