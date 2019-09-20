import { convertPathAbs, existPath, validatePath } from '../src/path.js';
import {
  verifyFile, isMarkdown, saveArrayPathFile, readFile, arrayLinksFile,
} from '../src/file.js';

const path = require('path');

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
    expect(convertPathAbs('C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\test\\prueba\\markdown.md')).toBe('C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\test\\prueba\\markdown.md');
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
    expect(saveArrayPathFile('./test/prueba/pruebita')).toEqual(['C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\test\\prueba\\pruebita\\link.md',
      'C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\test\\prueba\\pruebita\\link2.md']);
  });
});

describe('Deberia leer el contenido de un archivo', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Deberia retornar el contenido del archivo', () => {
    expect(readFile('./test/prueba/pruebita/link.md')).toEqual('Facebook [Facebook](https://es-la.facebook.com/)');
  });
});

describe('Deberia obtener los links de las rutas absolutas en una array de objetos', () => {
  it('Debería ser una función', () => {
    expect(typeof arrayLinksFile).toBe('function');
  });
  it('Deberia retornar un array de objetos con las propiedades: href, text, file', () => {
    expect(arrayLinksFile('./test/prueba/pruebita/link.md')).toEqual([{
      href: 'https://es-la.facebook.com/',
      text: 'Facebook',
      file: 'C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\test\\prueba\\pruebita\\link.md',
    }]);
  });
});
