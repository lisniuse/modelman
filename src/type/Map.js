import is from 'ispro';
import Base from './Base';
import getGlobal from '../util/getGlobal';

/**
 * type Map
 */

class Map extends Base {

  constructor(value) {
    super(value);
  }

  check() {
    return is.map(this.value);
  }
  
  _default() {
    return new getGlobal().Map();
  }

}

Map.toMongoType = function(Schema) {
  return getGlobal().Map;
}

export default Map;
