import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Url
 */

class Url extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    if ( this.required === true ) {
      if ( is.not.valid(this.value) ) {
        return false;
      } else {
        return is.url(this.value);
      }
    } else {
      return is.url(this.value);
    }
  }
  
  _default() {
    return '';
  }

}

Url.toMongoType = function(Schema = {}) {
  return getGlobal().String;
}

export default Url;
