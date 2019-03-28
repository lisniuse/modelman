import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Number
 */

class Number extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    let number = getGlobal().Number(this.value);
    let res = is.number(number);
    return res;
  }
  
  _default() {
    return 0;
  }

}

Number.toMongoType = function(Schema = {}) {
  return getGlobal().Number;
}

export default Number;
