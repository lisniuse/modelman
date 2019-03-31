function reset(condition) {
  this._iterator(field => {
    let value = this._initData[field.name];
    if (this._match(condition, field)) {
      if (value !== undefined) {
        field.value = value;
      }
    }
  });
  return this;
}

export default reset;
