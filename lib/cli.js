#!/usr/bin/env node
"use strict";

var _functionCli = require("./functionCli.js");

// Obteniendo solo los argumentos adicionales, i.e, creamos una nueva matriz
// que excluya los primeros 2 parámetros
const argv = process.argv.slice(2); // https://flaviocopes.com/node-cli-args/
// console.log(argv.length);

(0, _functionCli.functionCli)(argv).then(res => console.log(res));