function setData(object) {
  this._iterator(field => {
    let value = object[field.name];
    if (value) {
      field.value = value;
    }
  });
  return this;
}

export default setData;
