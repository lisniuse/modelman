import is from 'ispro';

function assign(fields) {
  if (is.plainObject(fields)) {
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const field = fields[key];
        if (field.type) {
          this.fields[key] = this._pickle(key, field);
        }
      }
    }
  }
}

export default assign;
