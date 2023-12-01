import CustomError from '../errors/CustomError.js';

class CarNameValidator {
  // TODO: 이름은 1자 이상 ~ 5자 이하만 유효, 이름들끼리 중복되지 않아야 유효, 2대 이상만 유효
  static validate_(carNames) {
    if (!this._(carNames)) throw new CustomError.inputCarName();
  }
}

export default CarNameValidator;
