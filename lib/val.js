"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateArr = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateArr = arr => {
  const arrPromises = arr.map(obj => {
    return (0, _nodeFetch.default)(obj.href).then(res => {
      if (res.status >= 200 && res.status < 400) {
        obj.status = res.status;
        obj.ok = res.statusText;
        return obj;
      } else {
        obj.status = res.status;
        obj.ok = 'fail';
        return obj;
      }
    }).catch(error => {
      obj.status = '(NO HAY STATUS PORQUE LINK FALLÓ)';
      obj.ok = 'fail';
      return obj;
    });
  });
  return Promise.all(arrPromises);
};

exports.validateArr = validateArr;