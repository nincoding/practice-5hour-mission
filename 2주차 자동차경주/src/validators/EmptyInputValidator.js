import CustomError from '../errors/CustomError.js';
import { ERROR_CONDITION } from '../constants/constants.js';

class EmptyInputValidator {
  static validateNotEmptyInput(input) {
    if (this.#isEmpty(input)) throw CustomError.emptyInput();
  }

  static #isEmpty(input) {
    return input.trim() === ERROR_CONDITION.emptyString;
  }
}

export default EmptyInputValidator;
