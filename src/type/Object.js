import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Object
 */

class Object extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.plainObject(this.value);
  }
  
  _default() {
    return {};
  }

}

Object.toMongoType = function(Schema = {}) {
  return getGlobal().Object;
}

export default Object;
