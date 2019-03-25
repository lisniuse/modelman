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

Mixed.toMongoType = function(Schema = {}) {
  return Schema.Mixed;
}

export default Mixed;
