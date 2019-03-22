import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Username
 */

class Username extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.username(this.value);
  }
  
  _default() {
    return '';
  }

}

Username.toMongoType = function(Schema) {
  return getGlobal().String;
}

export default Username;
