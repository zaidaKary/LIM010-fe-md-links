"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statValidate = exports.stats = void 0;

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
const stats = arrayObject => {
  const arrayLinks = arrayObject.map(element => element.href);
  const unique = [...new Set(arrayLinks)];
  const resultStats = `\n Total: ${arrayLinks.length} \n Unique: ${unique.length}`;
  return resultStats;
}; // console.log(stats(array));


exports.stats = stats;

const statValidate = arrayObject => {
  const arrayLinks = arrayObject.map(element => element.href);
  const unique = new Set(arrayLinks);
  const Broken = arrayObject.filter(element => element.statusText === 'Fail');
  const resultStatsValidate = `\n Total: ${arrayLinks.length} \n Unique: ${unique.size} \n Broken: ${Broken.length}`;
  return resultStatsValidate;
}; // console.log(statValidate(array));


exports.statValidate = statValidate;