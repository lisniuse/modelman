import mergeValid from '../util/mergeValid';

function pickle(key, field, index) {
  let required = mergeValid(field, ['r', 'required']);
  let placeholder = mergeValid(field, ['p', 'placeholder', 'name']);
  let displayName = mergeValid(field, ['n', 'name']);
  let formField = mergeValid(field, ['f', 'formField']);
  let tableField = mergeValid(field, ['t', 'tableField']);
  let defaultValue = mergeValid(field, ['d', 'default', 'defaultValue']);
  let min = mergeValid(field, ['min']);
  let max = mergeValid(field, ['max']);
  let ref = mergeValid(field, ['ref']);
  let Type = this._getConstructor(field.type);
  let name = key;
  let extra = field.extra || {};
  let instance = new Type({
    $index: index,
    extra,
    defaultValue,
    name,
    placeholder,
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
