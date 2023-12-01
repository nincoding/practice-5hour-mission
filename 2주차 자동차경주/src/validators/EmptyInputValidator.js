import CustomError from '../errors/CustomError.js';

class EmptyInputValidator {
  // TODO: 빈 문자열이나 공백이면 안됨
  static validateNotEmptyInput(input) {
    if (!this._(input)) throw new CustomError.EmptyInput();
  }
}

export default EmptyInputValidator;
