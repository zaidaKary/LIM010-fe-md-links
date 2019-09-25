// const path = require('path');

// const array = [{
//   href: 'https://es-la.facebook.com/',
//   text: 'Facebook',
//   file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
//   status: 200,
//   statusText: 'OK',
// },
// {
//   href: 'https://www.google.com/hx',
//   text: 'Google',
//   file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
//   status: 404,
//   statusText: 'Fail',
// },
// {
//   href: 'htt://www.google.com/hx',
//   text: 'Google link no existe',
//   file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
//   status: 'Error',
//   statusText: 'Este link no existe',
// }];

export const stats = (arrayObject) => {
  const arrayLinks = arrayObject.map((element) => element.href);
  const unique = [...new Set(arrayLinks)];
  const resultStats = `Total: ${arrayLinks.length}\n Unique: ${unique.length}`;
  return resultStats;
};
// console.log(stats(array));
export const statValidate = (arrayObject) => {
  const arrayLinks = arrayObject.map((element) => element.href);
  const unique = [...new Set(arrayLinks)];
  const Broken = arrayObject.filter((element) => element.statusText === 'Fail');
  const resultStatsValidate = `Total: ${arrayLinks.length}\n Unique: ${unique.length}\n Broken: ${Broken.length}`;
  return resultStatsValidate;
};
// console.log(statValidate(array));
