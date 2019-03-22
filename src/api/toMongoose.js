import is from 'ispro';

function toMongoose(Schema) {
  let schema = {};
  this._iterator((field, key) => {
    if (field && field.name) {
      schema[key] = {};
      schema[key].type = field.constructor.toMongoType(Schema);
      if (is.valid(field.ref)) {
        schema[key].ref = field.ref;
      }
      if (is.valid(field.defaultValue)) {
        schema[key].default = field.defaultValue;
      }
    }
  });
  return schema;
}

export default toMongoose;
