import Validator from '../../validators/Validator.js';

class User {
  #name;
  #hateMenus;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  getUserName() {
    return this.#name;
  }

  setHateMenus(hateMenus) {
    this.#hateMenus = hateMenus;
  }

  getHateMenus() {
    return this.#hateMenus;
  }

  #validate(name) {
    Validator.validateName(name);
  }
}

export default User;
