import { convertPathAbs, existPath, validatePath } from '../src/path.js';
import {
  verifyFile, isMarkdown, saveArrayPathFile, readFile, arrayLinksFile,
} from '../src/file.js';
import { validateLink } from '../src/validate.js';
import { mdLinks } from '../src/mdLinks.js';
import { stats, statValidate, formatOutput } from '../src/stats.js';
import { functionCli } from '../src/functionCli.js';

const path = require('path');
// array de objetos con tres propiedades
const output1 = [{
  href: 'https://es-la.facebook.com/',
  text: 'Facebook',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
},
{
  href: 'https://www.google.com/hx',
  text: 'Google',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
}];
// array de objetos con cinco propiedades
const output2 = [{
  href: 'https://es-la.facebook.com/',
  text: 'Facebook',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.google.com/hx',
  text: 'Google',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
  status: 404,
  statusText: 'Fail',
}];
const output3 = `${path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md')} https://es-la.facebook.com/ OK 200 Facebook\n${path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md')} https://www.google.com/hx Fail 404 Google\n`;
const output4 = `${path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md')} https://es-la.facebook.com/  Facebook\n${path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md')} https://www.google.com/hx  Google\n`;

describe('Verificando la existencia de la ruta', () => {
  it('Deberia retornar una función', () => {
    expect(typeof existPath).toBe('function');
  });
  it('Deberia retornar true si la ruta existe', () => {
    expect(existPath('./test/prueba/markdown.md')).toBe(true);
  });
  it('Deberia retornar false si la ruta no existe', () => {
    expect(existPath('./test/prueba/archivo.md')).toBe(false);
  });
});

describe('Validar si lo ingresado es una ruta', () => {
  it('Deberia retornar una función', () => {
    expect(typeof validatePath).toBe('function');
  });
  it('Deberia retornar true para una ruta valida', () => {
    expect(validatePath('./test/prueba/markdown.md')).toBe(true);
  });
  it('Deberia retornar false para una ruta invalida', () => {
    expect(validatePath('$&/test/prueba/markdown.md')).toBe(false);
  });
});

describe('Deberia convertir una ruta relativa a una ruta absoluta', () => {
  it('Deberia ser una función', () => {
    expect(typeof convertPathAbs).toBe('function');
  });
  it('Deberia convertir la ruta relativa a ruta absoluta', () => {
    expect(convertPathAbs('./test/prueba/markdown.md')).toBe(path.join(process.cwd(), '\\test\\prueba\\markdown.md'));
  });
  it('Deberia retornar una ruta si ya es absoluta', () => {
    expect(convertPathAbs(path.join(process.cwd(), '\\test\\prueba\\markdown.md'))).toBe(path.join(process.cwd(), '\\test\\prueba\\markdown.md'));
  });
});

describe('Deberia retornar si es o no un archivo', () => {
  it('Deberia ser una función', () => {
    expect(typeof verifyFile).toBe('function');
  });
  it('Deberia retornar true si es un archivo', () => {
    expect(verifyFile('./test/prueba/markdown.md')).toBe(true);
  });
  it('Deberia retornar false si no es un archivo', () => {
    expect(verifyFile('./test/prueba')).toBe(false);
  });
});

describe('Verificando si es la extension de un archivo markdown', () => {
  it('Deberia retornar una función', () => {
    expect(typeof isMarkdown).toBe('function');
  });
  it('Deberia retornar true si es un archivo markdown', () => {
    expect(isMarkdown('./test/prueba/markdown.md')).toBe(true);
  });
  it('Deberia retornar false si no es un archivo markdown', () => {
    expect(isMarkdown('./test/prueba/prueba.js')).toBe(false);
  });
});

describe('Recorriendo el directorio', () => {
  it('Deberia retornar una función', () => {
    expect(typeof saveArrayPathFile).toBe('function');
  });
  it('Deberia retornar un array de archivos .md o .markdown', () => {
    expect(saveArrayPathFile('./test/prueba/pruebita')).toEqual([path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
      path.join(process.cwd(), '\\test\\prueba\\pruebita\\link2.md')]);
  });
});

describe('Deberia leer el contenido de un archivo', () => {
  it('Deberia ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Deberia retornar el contenido del archivo', () => {
    expect(readFile('./test/prueba/pruebita/link.md')).toEqual('Facebook [Facebook](https://es-la.facebook.com/)Google [Google](https://www.google.com/hx)');
  });
});

describe('Deberia obtener los links de las rutas absolutas en una array de objetos', () => {
  it('Deberia ser una función', () => {
    expect(typeof arrayLinksFile).toBe('function');
  });
  it('Deberia retornar un array de objetos con las propiedades: href, text, file', () => {
    expect(arrayLinksFile('./test/prueba/pruebita/link.md')).toEqual(output1);
  });
});

describe('Deberia validar los links del array de objetos', () => {
  it('Deberia ser una función', () => {
    expect(typeof validateLink).toBe('function');
  });
  it('Deberia vevolvernos una promesa', (done) => validateLink(path.join(process.cwd(),
    './test/prueba/pruebita'))
    .then((res) => {
      expect(res).toEqual(output2);
      done();
    }));
});

describe('Deberia retornar el array de objetos segun la options: validate', () => {
  it('Deberia ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Deberia retornar las cinco propiedades del array de objetos cuando validate: true', (done) => {
    mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: true }).then((res) => {
      expect(res).toEqual(output2);
      done();
    });
  });
  it('Deberia retornar las tres propiedades del array de objetos cuando validate: false', (done) => {
    mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: false }).then((res) => {
      expect(res).toEqual(output1);
      done();
    });
  });
  it('Deberia retornar un string cuando la ruta no existe', (done) => {
    mdLinks(path.join(process.cwd(), './test/pruebaas'), { validate: true }).catch((error) => {
      expect(error.message).toEqual('La ruta no existe');
      done();
    });
  });
});
describe('Deberia retornar un String del Total y Unique de los links', () => {
  it('Deberia ser una función', () => {
    expect(typeof stats).toBe('function');
  });
  it('Deberia retornar un String de Total y Unique', () => {
    expect(stats(output2)).toBe('Total: 2\nUnique: 2');
  });
});
describe('Deberia de retornar un String del Total, Unique y Bronken de los links', () => {
  it('Deberia ser una función', () => {
    expect(typeof statValidate).toBe('function');
  });
  it('Deberia retornar un String de Total, Unique y Bronken', () => {
    expect(statValidate(output2)).toBe('Total: 2\nUnique: 2\nBroken: 1');
  });
});
describe('Deberia de retornar un string', () => {
  it('Deberia ser una función', () => {
    expect(typeof formatOutput).toBe('function');
  });
  it('Deberia retornar un string con la ruta, href, text, status, statusText', () => {
    expect(formatOutput(output1)).toEqual(output4);
  });
  it('Deberia retornar un string con la ruta, href y text', () => {
    expect(formatOutput(output2)).toEqual(output3);
  });
});
describe('Deberia retornar las diferentes opciones ingresadas en comando', () => {
  it('Deberia ser una función', () => {
    expect(typeof functionCli).toBe('function');
  });
  it('Deberia retornar un string cuando no se ingresa nada', (done) => {
    functionCli([]).then((res) => {
      expect(res).toEqual('Ingrese una ruta, por ejemplo: md-links ./some/example.md\n');
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path', (done) => {
    functionCli(['./test/prueba']).then((res) => {
      expect(res).toEqual(output4);
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path y --stats', (done) => {
    functionCli(['./test/prueba', '--stats']).then((res) => {
      expect(res).toEqual('Total: 2\nUnique: 2');
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path y --s', (done) => {
    functionCli(['./test/prueba', '--s']).then((res) => {
      expect(res).toEqual('Total: 2\nUnique: 2');
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path y --validate', (done) => {
    functionCli(['./test/prueba', '--validate']).then((res) => {
      expect(res).toEqual(output3);
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path y --v', (done) => {
    functionCli(['./test/prueba', '--v']).then((res) => {
      expect(res).toEqual(output3);
      done();
    });
  });
  it('Deberia retornar un string cuando ingresas mal el comando', (done) => {
    functionCli(['./test/prueba', '--val']).then((res) => {
      expect(res).toEqual('Comando incorrecto!!!');
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path, --validate y --stats', (done) => {
    functionCli(['./test/prueba', '--validate', '--stats']).then((res) => {
      expect(res).toEqual('Total: 2\nUnique: 2\nBroken: 1');
      done();
    });
  });
  it('Deberia retornar un string cuando le ingresas por comando el path, --stats y --validate', (done) => {
    functionCli(['./test/prueba', '--stats', '--validate']).then((res) => {
      expect(res).toEqual('Total: 2\nUnique: 2\nBroken: 1');
      done();
    });
  });
  it('Deberia retornar un string cuando ingresas mal los comandos', (done) => {
    functionCli(['./test/prueba', '--val', '--sts']).then((res) => {
      expect(res).toEqual('Comandos incorrectos!!!');
      done();
    });
  });
});
// it('Deberia retornar un string cuando le ingresas una ruta incorrecta', (done) => {
//   functionCli(['./test/pruebaas']).catch((error) => {
//     expect(error.message).toEqual('La ruta no existe');
//     done();
//   });
// });
