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
    return is.boolean(this.value);
  }
  
  _default() {
    return false;
  }

}

Boolean.toMongoType = function(Schema) {
  return getGlobal().Boolean;
}

export default Boolean;
