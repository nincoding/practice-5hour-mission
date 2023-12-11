import { ERROR_MESSAGE, PREFIX_ERROR } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX_ERROR} ${message}`);
  }

  static emptyInput() {
    return new CustomError(ERROR_MESSAGE.invalidInput);
  }

  static carName() {
    return new CustomError(ERROR_MESSAGE.invalidCarName);
  }

  static roundNumber() {
    return new CustomError(ERROR_MESSAGE.invalidRoundNumber);
  }
}

export default CustomError;
