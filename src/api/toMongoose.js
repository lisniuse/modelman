import is from 'ispro';
import types from '../type/index';

function toMongoose(Types) {
  let schema = {};
  this._iterator((field, key) => {
    if (field && field.name) {
      schema[key] = {};
      schema[key].type = field.constructor.toMongoType(Types);
      if (is.valid(field.ref)) {
        schema[key].ref = field.ref;
      }
      if (is.valid(field.index)) {
        schema[key].index = field.index;
      }
      if (is.valid(field.unique)) {
        schema[key].unique = field.unique;
      }
      if (is.valid(field.defaultValue)) {
        schema[key].default = field.defaultValue;
      }
      if ( field.constructor === types.Number ) {
        if (is.valid(field.max)) {
          schema[key].max = field.max;
        }
        if (is.valid(field.min)) {
          schema[key].min = field.min;
        }
      }
    }
  });
  return schema;
}

export default toMongoose;
