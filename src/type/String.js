import is from 'ispro';
import Base from './Base';

/**
 * type String
 */

class String extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    if ( this.required === true ) {
      if ( this.value === '' ) {
        return false;
      } else {
        return is.string(this.value);
      }
    } else {
      return is.string(this.value);
    }
  }
  
  _default() {
    return '';
  }

}

export default String;
