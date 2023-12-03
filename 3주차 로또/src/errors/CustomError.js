import { ERROR_MESSAGE, PREFIX_ERROR } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX_ERROR} ${message}`);
  }

  static emptyInput() {
    return new CustomError(ERROR_MESSAGE.invalidInput);
  }

  static purchaseAmount() {
    return new CustomError(ERROR_MESSAGE.invalidTypeNumber);
  }

  static lotto(errorMessage) {
    return new CustomError(errorMessage);
  }
}

export default CustomError;
