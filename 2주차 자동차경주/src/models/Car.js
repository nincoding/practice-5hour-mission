import CarNameValidator from '../validators/CarNameValidator.js';

class Car {
  #name;
  #progress = 0;

  constructor(name) {
    CarNameValidator.validateCarName(name);

    this.#name = name;
  }

  getCarName() {
    return this.#name;
  }

  getProgress() {
    return this.#progress;
  }

  move() {
    this.#progress += 1;
  }
}

export default Car;
