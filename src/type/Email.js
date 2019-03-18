import is from 'ispro';
import Base from './Base';

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

export default Email;
