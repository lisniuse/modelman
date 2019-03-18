import is from 'ispro';

/**
 * type Number
 */

class Number {

  constructor(value) {
    this.value = value;
  }

  check() {
    return is.number(this.value);
  }

}

export default Number;
