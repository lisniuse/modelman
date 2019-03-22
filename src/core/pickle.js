import mergeValid from '../util/mergeValid';

function pickle(key, field) {
  let required = mergeValid(field, ['r', 'required']);
  let displayName = mergeValid(field, ['n', 'name']);
  let formField = mergeValid(field, ['f', 'formField']);
  let tableField = mergeValid(field, ['t', 'tableField']);
  let defaultValue = mergeValid(field, ['d', 'default', 'defaultValue']);
  let min = mergeValid(field, ['min']);
  let max = mergeValid(field, ['max']);
  let ref = mergeValid(field, ['ref']);
  let Type = this._getConstructor(field.type);
  let name = key;

  let instance = new Type({
    defaultValue,
    name,
    displayName,
    tableField,
    formField,
    required,
    min,
    max,
    ref
  });
  return instance;
}

export default pickle;
