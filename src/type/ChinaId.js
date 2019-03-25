import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type ChinaId
 */

class ChinaId extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.cnIdCode(this.value);
  }
  
  _default() {
    return '';
  }

}

ChinaId.toMongoType = function(Schema = {}) {
  return getGlobal().String;
}

export default ChinaId;
