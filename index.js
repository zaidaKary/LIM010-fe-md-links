const path = require('path'); //trabajando con rutas de archivos y directorios
const namePath = path.basename('C://temp//myfile.html');
const convertPathAbs = path.resolve('./test/prueba/prueba.js');//convierte a ruta absoluta
// console.log(namePath);
// console.log(convertPathAbs);
const fs = require('fs');
const routeFile = 'C:\\Users\\usuario-libre\\Desktop\\ProyectoLinks\\LIM010-fe-md-links\\libreria\\test\\prueba';

const verifyFile = (routeFilee) => {
fs.stat(routeFilee, (err, data)=> {
  if (err) 
    console.log('no existe' + err);
  else
  console.log(data.isFile()); 
});
};
// verifyFile(routeFile);
// export const verifyFile = (route) => {
//   if(fs.stats.isFile()){
//       return true;
//   };
//       return false;
// };
console.log(fs.statSync(routeFile));
