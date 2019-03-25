import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Email
 */

class Email extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.email(this.value);
  }
  
  _default() {
    return '';
  }

}

Email.toMongoType = function(Schema = {}) {
  return getGlobal().String;
}

export default Email;
