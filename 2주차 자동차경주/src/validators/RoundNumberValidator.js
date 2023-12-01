import CustomError from '../errors/CustomError.js';

class RoundNumberValidator {
  // TODO: 숫자(정수)만 유효, 1회 이상만 유효
  static validate_(carNames) {
    if (!this._(carNames)) throw new CustomError.inputRoundNumber();
  }
}

export default RoundNumberValidator;
