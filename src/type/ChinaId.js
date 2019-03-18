import is from 'ispro';
import Base from './Base';

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

export default ChinaId;
