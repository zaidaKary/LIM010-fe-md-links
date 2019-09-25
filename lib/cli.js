#!/usr/bin/env node
"use strict";

var _mdLinks = require("./mdLinks.js");

var _stats = require("./stats.js");

// Obteniendo solo los argumentos adicionales, i.e, creamos una nueva matriz
// que excluya los primeros 2 parámetros
const argv = process.argv.slice(2); // https://flaviocopes.com/node-cli-args/
// console.log(argv.length);
// Casos:

switch (argv.length) {
  case 0:
    console.log('Ingrese una ruta, por ejemplo: md-links ./some/example.md\n');
    break;

  case 1:
    (0, _mdLinks.mdLinks)(argv[0]).then(res => res.forEach(element => console.log(`${element.file} ${element.href} ${element.text}`)));
    break;

  case 2:
    if (argv[1] === '--stats' || argv[1] === '--s') {
      (0, _mdLinks.mdLinks)(argv[0], {
        validate: true
      }).then(res => console.log((0, _stats.stats)(res))).catch(error => console.log(error));
    } else if (argv[1] === '--validate' || argv[1] === '--v') {
      (0, _mdLinks.mdLinks)(argv[0], {
        validate: true
      }).then(res => res.forEach(element => console.log(`${element.file} ${element.href} ${element.statusText}  ${element.status} ${element.text} `)));
    }

    break;

  case 3:
    if (argv[1] === '--validate' && argv[2] === '--stats' || argv[1] === '--stats' && argv[2] === '--validate') {
      (0, _mdLinks.mdLinks)(argv[0], {
        validate: true
      }).then(res => console.log((0, _stats.statValidate)(res))).catch(error => console.log(error));
    }

    break;

  default:
    console.log('Error');
    break;
}