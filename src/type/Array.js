import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Array
 */

class Array extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.array(this.value);
  }
  
  _default() {
    return getGlobal().Array();
  }

}

Array.toMongoType = function(Schema = {}) {
  return getGlobal().Array;
}

export default Array;
