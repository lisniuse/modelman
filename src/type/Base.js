import is from 'ispro';

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
    max: -1
  }) {
    this.value = options.defaultValue || this._default();
    this.name = options.name;
    this.displayName = options.displayName;
    this.tableField = options.tableField;
    this.formField = options.formField;
    this.required = options.required;
    this.min = options.min;
    this.max = options.max;

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

Base.fieldCount = 0;

export default Base;
