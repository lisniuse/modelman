import mixin from './util/mixin';

import apiAssign from './api/assign';
import apiSetData from './api/setData';
import apiReset from './api/reset';
import apiToJson from './api/toJson';
import apiToDisplayJson from './api/toDisplayJson';
import apiToMongoose from './api/toMongoose';
import apiValidatorAll from './api/validatorAll';
import apiValidatorPart from './api/validatorPart';
import corePickle from './core/pickle';
import coreMount from './core/mount';
import coreGetConstructor from './core/getConstructor';
import coreIterator from './core/iterator';
import coreMatch from './core/match';

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
  ("public", "reset", apiReset)
  ("private", "_toJson", apiToJson)
  ("private", "_toDisplayJson", apiToDisplayJson)
  ("private", "_toMongoose", apiToMongoose)
  ("private", "_validatorAll", apiValidatorAll)
  ("private", "_validatorPart", apiValidatorPart)
  ("private", "_pickle", corePickle)
  ("private", "_getConstructor", coreGetConstructor)
  ("private", "_iterator", coreIterator)
  ("private", "_mount", coreMount)
  ("private", "_match", coreMatch)
;

export default Model;
