import { mdLinks } from './mdLinks.js';
import { stats, statValidate, functionValidate } from './stats.js';

export const functionCli = (matrix) => {
  switch (matrix.length) {
    case 0: return new Promise((resolve) => resolve('Ingrese una ruta, por ejemplo: md-links ./some/example.md\n'));
    case 1: return mdLinks(matrix[0]).then((res) => res);
    case 2:
      if (matrix[1] === '--stats' || matrix[1] === '--s') {
        return mdLinks(matrix[0], { validate: true })
          .then((res) => stats(res))
          .catch((error) => error);
      } else if (matrix[1] === '--validate' || matrix[1] === '--v') {
        return mdLinks(matrix[0], { validate: true })
          .then((res) => functionValidate(res))
          .catch((error) => error);
      }
      break;
    case 3:
      if ((matrix[1] === '--validate' && matrix[2] === '--stats') || (matrix[1] === '--stats' && matrix[2] === '--validate')) {
        return mdLinks(matrix[0], { validate: true })
          .then((res) => statValidate(res))
          .catch((error) => error);
      }
    default: return new Promise((resolve) => resolve('Error'));
  }
};
