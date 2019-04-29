import type from '../type/index';
import is from 'ispro';

function setData(object) {
  this._iterator(field => {
    let value = object[field.name];
    let sourceValue = value;
    let sourceDisplayValue = value;
    if (is.plainObject(value)) {
      if ( field.constructor === type.ObjectId && field.ref ) {
        sourceDisplayValue = field.extra.displayField ? sourceValue[field.extra.displayField] : sourceValue._id;
        sourceValue = sourceValue._id;
      } else {
        sourceValue = value;
        sourceDisplayValue = value;
      }
    } else {
      sourceValue = value;
      sourceDisplayValue = value;
    }
    field.value = sourceValue;
    field.displayValue = sourceDisplayValue;
  });
  return this;
}

export default setData;
