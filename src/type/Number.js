import is from 'ispro';
import Base from './Base';

/**
 * type Number
 */

class Number extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.number(this.value);
  }
  
  _default() {
    return 0;
  }

}

export default Number;
