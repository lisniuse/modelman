function validatorPart() {
  let errorArr = [];
  this._iterator(field => {
    if (!field.check()) {
      let error = {
        name: field.name,
        displayName: field.displayName
      }
      errorArr.push(error);
    }
  });
  return errorArr;
}

export default validatorPart;
