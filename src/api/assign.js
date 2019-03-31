import is from 'ispro';

function assign(fields) {
  if (is.plainObject(fields)) {
    let index = -1;
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        index++;
        const field = fields[key];
        if (field.type) {
          this.fields[key] = this._pickle(key, field, index);
        }
      }
    }
    this._initData = this._toJson();
  }
}

export default assign;
