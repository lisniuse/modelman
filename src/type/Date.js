import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Date
 */

class Date extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.date(this.value);
  }
  
  _default() {
    return new getGlobal().Date();
  }

}

Date.toMongoType = function(Schema) {
  return getGlobal().Date;
}

export default Date;
