const path = require('path'); //trabajando con rutas de archivos y directorios
//Funcion convertir a ruta absoluta
export const convertPathAbs = (route) => {
    return path.resolve(route);
};

export const pathRead = (route) => {
    return path.isAbsolute(route);
};