import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Password
 */

class Password extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.password(this.value);
  }
  
  _default() {
    return '';
  }

}

Password.toMongoType = function(Types = {}) {
  return getGlobal().String;
}

export default Password;
