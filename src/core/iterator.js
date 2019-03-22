import is from 'ispro';

function iterator(callback) {
  let fields = this.fields;
  let index = -1;
  for (const key in fields) {
    if (fields.hasOwnProperty(key)) {
      index++;
      const field = fields[key];
      if (is.function(callback)) {
        callback(field, key, index);
      }
    }
  }
}

export default iterator;
