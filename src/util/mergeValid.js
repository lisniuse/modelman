import is from 'ispro';

function mergeValid(field, array) {
  if ( array.length === 0 ) {
    return undefined;
  }
  let validValue = field[array[0]];
  array.forEach(key => {
    let _value = field[key];
    if (is.valid(_value)) {
      validValue = _value;
    }
  });
  return validValue;
}

export default mergeValid;
