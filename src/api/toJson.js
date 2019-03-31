function toJson(condition) {
  let json = {};
  this._iterator(field => {
    if (this._match(condition, field)) {
      json[field.name] = field.value;
    }
  });
  return json;
}

export default toJson;
