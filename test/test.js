import { convertPathAbs, existPath, validatePath } from '../src/path.js';
import {
  verifyFile, isMarkdown, saveArrayPathFile, readFile, arrayLinksFile,
} from '../src/file.js';
import { validateLink } from '../src/validate.js';
import { mdLinks } from '../src/mdLinks.js';
import { stats } from '../src/stats.js';

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
},
{
  href: 'htt://www.google.com/hx',
  text: 'Google link no existe',
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
},
{
  href: 'htt://www.google.com/hx',
  text: 'Google link no existe',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
  status: 'Error',
  statusText: 'Este link no existe',
}];
const output3 = [{
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
},
{
  href: 'htt://www.google.com/hx',
  text: 'Google link no existe',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
  status: 'Error',
  statusText: 'Este link no existe',
}];
const output4 = [{
  href: 'https://es-la.facebook.com/',
  text: 'Facebook',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
},
{
  href: 'https://www.google.com/hx',
  text: 'Google',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
},
{
  href: 'htt://www.google.com/hx',
  text: 'Google link no existe',
  file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
}];

describe('Verificando la existencia de la ruta', () => {
  it('Deberia retornar una funcion', () => {
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
  it('Deberia retornar una funcion', () => {
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
  it('Deberia ser una funcion', () => {
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
  it('Deberia ser una funcion', () => {
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
  it('Deberia retornar una funcion', () => {
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
  it('Deberia retornar una funcion', () => {
    expect(typeof saveArrayPathFile).toBe('function');
  });
  it('Deberia retornar un array de archivos .md o .markdown', () => {
    expect(saveArrayPathFile('./test/prueba/pruebita')).toEqual([path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
      path.join(process.cwd(), '\\test\\prueba\\pruebita\\link2.md')]);
  });
});

describe('Deberia leer el contenido de un archivo', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Deberia retornar el contenido del archivo', () => {
    expect(readFile('./test/prueba/pruebita/link.md')).toEqual('Facebook [Facebook](https://es-la.facebook.com/)Google [Google](https://www.google.com/hx)Link no existe [Google link no existe](htt://www.google.com/hx)');
  });
});

describe('Deberia obtener los links de las rutas absolutas en una array de objetos', () => {
  it('Debería ser una función', () => {
    expect(typeof arrayLinksFile).toBe('function');
  });
  it('Deberia retornar un array de objetos con las propiedades: href, text, file', () => {
    expect(arrayLinksFile('./test/prueba/pruebita/link.md')).toEqual(output1);
  });
});

describe('Deberia validar los links del array de objetos', () => {
  it('Debería vevolvernos una promesa', (done) => validateLink(path.join(process.cwd(),
    './test/prueba/pruebita'))
    .then((res) => {
      expect(res).toEqual(output2);
      done();
    }));
});

describe('Deberia retornar el array de objetos segun la options: validate', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Deberia retornar las cinco propiedades del array de objetos cuando validate: true', (done) => {
    mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: true }).then((res) => {
      expect(res).toEqual(output3);
      done();
    });
  });
  it('Deberia retornar las tres propiedades del array de objetos cuando validate: false', (done) => {
    mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: false }).then((res) => {
      expect(res).toEqual(output4);
      done();
    });
  });
});
describe('Deberia retornar un String del Total y Unique de los links', () => {
  it('Deberia retornar un String de Total y Unique', () => {
    expect(stats(output3)).toBe('Total: 3 Unique: 3');
  });
});
