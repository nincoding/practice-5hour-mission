import { ERROR_MESSAGE, PREFIX_ERROR } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX_ERROR} ${message}`);
  }

  static emptyInput() {
    return new CustomError(ERROR_MESSAGE.invalidInput);
  }
}

export default CustomError;
