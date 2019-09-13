import {convertPathAbs, pathRead} from '../src/path.js';

// describe('Validar si lo ingresado es una ruta', () => {
//     it('Debería retornar una funcion', () => {
//       expect(typeof validatePath).toBe('function');
//     });
//     it('Debería retornar true para una ruta valida', () => {
//       expect(validatePath('./test/prueba/prueba.js')).toBe(true);
//     });
//     it('Debería retornar false para una ruta invalida', () => {
//       expect(validatePath('$$./prueba.js')).toBe(false);
//     });
//   });

describe('Leer la ruta', () => {
    it('Debería retornar function', () => {
      expect(typeof pathRead).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
      expect(pathRead('C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\libreria\\test\\prueba\\markdown.md')).toBe(true);
    });
    it('Debería retornar false si la ruta no es absoluta', () => {
      expect(pathRead('./libreria/test/prueba/markdown.md')).toBe(false);
    });
  });

describe('Deberia convertir una ruta relativa a una ruta absoluta', () => {
    it('debería ser una funcion', () => {
        expect(typeof convertPathAbs).toEqual('function');
    });
    it('deberia convertir a ruta absoluta', () => {
        expect(convertPathAbs('./libreria/test/prueba/markdown.md')).toEqual('C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\libreria\\test\\prueba\\markdown.md');
    });
});