import Base from './Base';
import is from 'ispro';

/**
 * type ObjectId
 */

class ObjectId extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.valid(this.value);
  }
  
  _default() {
    return '';
  }

}

ObjectId.toMongoType = function(Types = {}) {
  return Types.ObjectId;
}

export default ObjectId;
