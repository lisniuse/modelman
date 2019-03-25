import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Timestamp
 */

class Timestamp extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    if ( this.required === true ) {
      if ( is.not.valid(this.value) ) {
        return false;
      } else {
        return is.date(new Date(parseInt(this.value) * 1000));
      }
    } else {
      return is.date(new Date(parseInt(this.value) * 1000));
    }
  }
  
  _default() {
    return 0;
  }

}

Timestamp.toMongoType = function(Schema = {}) {
  return getGlobal().Number;
}

export default Timestamp;
