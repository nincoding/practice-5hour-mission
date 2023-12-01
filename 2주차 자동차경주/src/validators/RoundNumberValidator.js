import CustomError from '../errors/CustomError.js';

class RoundNumberValidator {
  // TODO: 숫자(정수)만 유효, 1회 이상만 유효
  static validateRoundNumber(round) {
    if (!this._(round)) throw new CustomError.roundNumber();
  }
}

export default RoundNumberValidator;
