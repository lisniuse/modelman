import types from '../type/index';

function validatorAll() {
  let errorArr = [];
  this._iterator(field => {
    if (field._check() === false && field.constructor !== types.Any) {
      let error = {
        name: field.name,
        displayName: field.displayName
      }
      errorArr.push(error);
    }
  });
  return errorArr;
}

export default validatorAll;
