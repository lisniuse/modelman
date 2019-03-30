import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Boolean
 */

class Boolean extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.boolean(getGlobal().Boolean(this.value));
  }
  
  _default() {
    return false;
  }

}

Boolean.toMongoType = function(Types = {}) {
  return getGlobal().Boolean;
}

export default Boolean;
