import { mdLinks } from './mdLinks.js';
import { stats, statValidate, functionValidate } from './stats.js';

export const functionCli = (matrix) => {
  let output = '';
  if (matrix.length === 0) {
    output = new Promise((resolve) => resolve('Ingrese una ruta, por ejemplo: md-links ./some/example.md\n'));
  }
  if (matrix.length === 1) {
    output = mdLinks(matrix[0]).then((res) => res);
  }
  if (matrix.length === 2) {
    if (matrix[1] === '--stats' || matrix[1] === '--s') {
      output = mdLinks(matrix[0], { validate: true })
        .then((res) => stats(res))
        .catch((error) => error);
    } if (matrix[1] === '--validate' || matrix[1] === '--v') {
      output = mdLinks(matrix[0], { validate: true })
        .then((res) => functionValidate(res))
        .catch((error) => error);
    }
    // else {
    //   output = new Promise((resolve) => resolve('Comando incorrecto!!!'));
    // }
  }
  if (matrix.length === 3) {
    if ((matrix[1] === '--validate' && matrix[2] === '--stats') || (matrix[1] === '--stats' && matrix[2] === '--validate')) {
      output = mdLinks(matrix[0], { validate: true })
        .then((res) => statValidate(res))
        .catch((error) => error);
    } else {
      output = new Promise((resolve) => resolve('Comandos incorrectos!!!'));
    }
  }
  return output;
};
