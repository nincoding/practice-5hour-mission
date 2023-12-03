import CustomError from '../errors/CustomError.js';
import { SYMBOL } from '../constants/constants.js';

class EmptyInputValidator {
  static validateNotEmptyInput(input) {
    if (this.#isEmpty(input)) throw CustomError.emptyInput();
  }

  static #isEmpty(input) {
    return input && input.trim() === SYMBOL.emptyString;
  }
}

export default EmptyInputValidator;
