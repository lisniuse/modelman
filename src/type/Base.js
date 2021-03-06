import is from 'ispro';
import getGlobal from '../util/getGlobal';

/**
 * Basic type
 */

class Base {

  constructor(options = {
    $index: 0,
    extra: {},
    defaultValue: '',
    placeholder: '',
    name: Base.fieldCount + 'field_name',
    displayName: Base.fieldCount + 'display_name',
    tableField: true,
    formField: true,
    required: true,
    min: -1,
    max: -1,
    ref: '' //mongoose's type
  }) {
    if ( typeof options === 'object' ) {
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          const element = options[key];
          this[key] = element;
        }
      }
      this.value = is.valid(options.defaultValue) ? options.defaultValue : this._default();
      this.displayValue = typeof this.value === 'object' ? JSON.parse(JSON.stringify(this.value)) : this.value;
      Base.fieldCount++;
    }
  }

  isEmpty() {
    return is.empty(value);
  }

  check() {
    return false;
  }

  _check() {
    if (this.required === true) {
      if (is.not.valid(this.value)) {
        return false;
      } else {
        return this.check();
      }
    } else {
      if (is.not.valid(this.value)) {
        return true;
      } else {
        return this.check();
      }
    }
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
Base.toMongoType = function (Types = {}) {
  return getGlobal().String;
}

export default Base;
