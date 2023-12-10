import Validator from '../../validators/Validator.js';

class User {
  #name;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  getUserName() {
    return this.#name;
  }

  #validate(name) {
    Validator.validateName(name);
  }
}

export default User;
