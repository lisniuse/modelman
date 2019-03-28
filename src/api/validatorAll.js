function validatorAll() {
  let errorArr = [];
  this._iterator(field => {
    if (field._check() === false) {
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
