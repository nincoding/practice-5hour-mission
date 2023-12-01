import CustomError from '../errors/CustomError.js';
import { CAR_NAME_CONDITION } from '../constants/constants.js';

class CarNameValidator {
  static validateCarName(carName) {
    if (!this.#isValidLength(carName)) throw CustomError.carName();
  }

  static validateCarNames(carNames) {
    if (!this.#isValidCount(carNames)) throw CustomError.carName();
    if (!this.#isValidUnique(carNames)) throw CustomError.carName();
  }

  static #isValidLength(carName) {
    return (
      carName.length >= CAR_NAME_CONDITION.minLength &&
      carName.length <= CAR_NAME_CONDITION.maxLength
    );
  }

  static #isValidCount(carNames) {
    return carNames.length >= CAR_NAME_CONDITION.minCount;
  }

  static #isValidUnique(carNames) {
    const uniqueCarNames = new Set(carNames);

    return uniqueCarNames.size === carNames.length;
  }
}

export default CarNameValidator;
