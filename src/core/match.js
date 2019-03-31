const is = require('ispro');

function match(queryObject, object, isExact = true) {
  let matchCount = 0;
  if (is.not.valid(queryObject)) {
    return true;
  }
  for (const key in queryObject) {
    if (queryObject.hasOwnProperty(key)) {
      let queryObjectValue = queryObject[key];
      let objectValue = object[key];
      if (queryObjectValue && objectValue) {
        let _queryObjectValue = queryObjectValue + '';
        let _objectValue = objectValue + '';
        if (isExact) {
          if (queryObjectValue instanceof RegExp) {
            if (queryObjectValue.test(objectValue)) {
              matchCount++;
            }
          } else if (is.equal(queryObjectValue, objectValue)) {
            matchCount++;
          }
        } else {
          if (_queryObjectValue.indexOf(_objectValue) !== -1) {
            matchCount++;
          }
        }
      }
    }
  }
  return matchCount > 0;
}

export default match;
