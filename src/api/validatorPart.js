import is from 'ispro';

function validatorPart() {
  let errorArr = [];
  this._iterator(field => {
    if ( is.valid(field.value) ) {
      if (!field._check()) {
        let error = {
          name: field.name,
          displayName: field.displayName
        }
        errorArr.push(error);
      }
    }
  });
  return errorArr;
}

export default validatorPart;
