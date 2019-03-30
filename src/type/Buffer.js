import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Buffer
 */

class Buffer extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.buffer(this.value);
  }
  
  _default() {
    return false;
  }

}

Buffer.toMongoType = function(Types = {}) {
  return getGlobal().Buffer;
}

export default Buffer;
