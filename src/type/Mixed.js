import Base from './Base';

/**
 * type Mixed
 */

class Mixed extends Base {

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

Mixed.toMongoType = function(Types = {}) {
  return Types.Mixed;
}

export default Mixed;
