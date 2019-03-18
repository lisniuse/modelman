import is from 'ispro';

/**
 * Model
 */

class Model {

  constructor(options = {}) {
    this.model = options;
    this.fields = {};

    this._mixin();
  }
  
  setFields(fields) {
    if ( is.plainObject(fields) ) {
      for (const key in fields) {
        if (fields.hasOwnProperty(key)) {
          const field = fields[key];
          if ( field.type ) {
            this.fields[key] = this._toInternalField(key, field);
          }
        }
      }
    }
  }

  set(object) {
    this._fieldIterator(field => {
      let value = object[field.name];
      if ( value ) {
        field.value = value;
      }
    });
    return this;
  }

  _toInternalField(key, field) {
    let defaultValue = field.d || field.default || field.defaultValue || '';
    let name = key;
    let displayName = field.n || field.name || '';
    let tableField = this._getValid(field, ['t', 'tableField']);
    let formField = this._getValid(field, ['f', 'formField']);
    let required = this._getValid(field, ['r', 'required']);
    let min = field.min || -1;
    let max = field.max || -1;
    let instance = new field.type({
      defaultValue,
      name,
      displayName,
      tableField,
      formField,
      required,
      min,
      max
    });
    return instance;
  }

  _getValid(field, array) {
    let value = true;
    array.forEach(key => {
      let _value = field[key];
      if ( is.valid(_value) ) {
        value = _value;
      }
    });
    return value;
  }

  _toJson() {
    let json = {};
    let fields = this.fields;
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const field = fields[key];
        json[field.name] = field.value;
      }
    }
    return json;
  }

  _toMongoose() {
    return {}
  }

  _validatorAll() {
    let errorArr = [];
    this._fieldIterator(field => {
      if ( !field.check() ) {
        let error = {
          name: field.name,
          displayName: field.displayName
        }
        errorArr.push(error);
      }
    });
    return errorArr;
  }

  _fieldIterator(fn) {
    let fields = this.fields;
    let index = -1;
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        index++;
        const field = fields[key];
        fn(field, index);
      }
    }
  }

  _mixin() {

    this.to = {
      json: this._toJson.bind(this),
      mongoose: this._toMongoose.bind(this)
    }

    this.validator = {
      all: this._validatorAll.bind(this)
    }
  }

}

export default Model;
