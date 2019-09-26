#!/usr/bin/env node
import { functionCli } from './functionCli.js';
// Obteniendo solo los argumentos adicionales, i.e, creamos una nueva matriz
// que excluya los primeros 2 parámetros
const argv = process.argv.slice(2); // https://flaviocopes.com/node-cli-args/
// console.log(argv.length);
functionCli(argv).then((res) => console.log(res));
