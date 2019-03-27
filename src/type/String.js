import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

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
        return is.string(getGlobal().String(this.value));
      }
    } else {
      return is.string(getGlobal().String(this.value));
    }
  }
  
  _default() {
    return '';
  }

}

String.toMongoType = function(Schema = {}) {
  return getGlobal().String;
}

export default String;
