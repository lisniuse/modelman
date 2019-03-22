import is from 'ispro';
import Base from './Base';

/**
 * type Float
 */

class Float extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.number(this.value);
  }
  
  _default() {
    return 0.0;
  }

}

Float.toMongoType = function(Schema) {
  return Schema.Types.Decimal128;
}

export default Float;
