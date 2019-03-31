function reset() {
  this._iterator(field => {
    let value = this._initData[field.name];
    field.value = value;
  });
  return this;
}

export default reset;
