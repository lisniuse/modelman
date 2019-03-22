import is from 'ispro';
import getGlobal from '../util/getGlobal';

/**
 * Basic type
 */

class Base {

  constructor(options = {
    defaultValue: '',
    name: Base.fieldCount + 'field_name',
    displayName: Base.fieldCount + 'display_name',
    tableField: true,
    formField: true,
    required: true,
    min: -1,
    max: -1,
    ref: '' //mongoose's type
  }) {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const element = options[key];
        this[key] = element;
      }
    }
    this.value = is.valid(options.defaultValue) ? options.defaultValue : this._default();
    Base.fieldCount++;
  }

  isEmpty() {
    return is.empty(value);
  }

  check() {
    return false;
  }

  getValue() {
    return this.value;
  }

  getName() {
    return this.name;
  }

  _default() {
    return '';
  }
}

//Total number of record fields
Base.fieldCount = 0;

//Convert to mongo data type
Base.toMongoType = function(Schema) {
  return getGlobal().String;
}

export default Base;
