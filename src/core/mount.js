function mount() {
  
  this.to = {
    json: this._toJson.bind(this),
    displayJson: this._toDisplayJson.bind(this),
    mongoose: this._toMongoose.bind(this)
  }

  this.validator = {
    all: this._validatorAll.bind(this),
    part: this._validatorPart.bind(this)
  }

}

export default mount;
