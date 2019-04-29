import Base from './Base';

/**
 * type Any
 */

class Any extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return true;
  }
  
  _default() {
    return '';
  }

}

Any.toMongoType = function(Types = {}) {
  return Types.Mixed;
}

export default Any;
