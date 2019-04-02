function displayJson(condition) {
  let json = {};
  this._iterator(field => {
    if (this._match(condition, field)) {
      json[field.name] = field.displayValue;
    }
  });
  return json;
}

export default displayJson;
