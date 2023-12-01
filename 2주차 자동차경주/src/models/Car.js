import { RACING_CONDITION } from '../constants/constants.js';

class Car {
  #name;
  #progress = RACING_CONDITION.startRange;

  constructor(name, validator) {
    validator.validateCarName(name);

    this.#name = name;
  }

  getCarName() {
    return this.#name;
  }

  getProgress() {
    return this.#progress;
  }

  move() {
    this.#progress += RACING_CONDITION.oneStep;
  }
}

export default Car;
