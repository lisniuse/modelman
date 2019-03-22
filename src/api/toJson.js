function toJson() {
  let json = {};
  this._iterator(field => {
    json[field.name] = field.value;
  });
  return json;
}

export default toJson;
