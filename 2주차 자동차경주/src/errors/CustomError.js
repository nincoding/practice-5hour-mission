import { ERROR_MESSAGE, PREFIX_ERROR } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX_ERROR} ${message}`);
  }

  static inputCarName() {
    return new CustomError(ERROR_MESSAGE.invalidCarName);
  }

  static inputRoundNumber() {
    return new CustomError(ERROR_MESSAGE.invalidRoundNumber);
  }
}

export default CustomError;
