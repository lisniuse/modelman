import is from 'ispro';
import types from '../type/index';

function getConstructor(type) {
  let TypeConstructor = function () { };
  if (is.string(type)) {
    TypeConstructor = types[type] || types.String;
  } else if (is.function(type)) {
    TypeConstructor = types.same(t => t === type) ? type : types.String;
  } else {
    TypeConstructor = types.Any;
  }
  return TypeConstructor;
}

export default getConstructor;
