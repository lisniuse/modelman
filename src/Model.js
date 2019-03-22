import mixin from './util/mixin';

import apiAssign from './api/assign';
import apiSetData from './api/setData';
import apiToJson from './api/toJson';
import apiToMongoose from './api/toMongoose';
import apiValidatorAll from './api/validatorAll';
import apiValidatorPart from './api/validatorPart';
import corePickle from './core/pickle';
import coreMount from './core/mount';
import coreGetConstructor from './core/getConstructor';
import coreIterator from './core/iterator';

/**
 * Model
 */

class Model {

  constructor(options = {}) {
    this.model = options;
    this.fields = {};
    this._mount();
  }

}

mixin(Model, "public", "assign", apiAssign)
  ("public", "setData", apiSetData)
  ("private", "_toJson", apiToJson)
  ("private", "_toMongoose", apiToMongoose)
  ("private", "_validatorAll", apiValidatorAll)
  ("private", "_validatorPart", apiValidatorPart)
  ("private", "_pickle", corePickle)
  ("private", "_getConstructor", coreGetConstructor)
  ("private", "_iterator", coreIterator)
  ("private", "_mount", coreMount)
;

export default Model;
