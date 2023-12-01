import CustomError from '../errors/CustomError.js';

class CarNameValidator {
  // TODO: 자동차 한대 이름은 1자 이상 ~ 5자 이하만 유효
  static validateCarName(carNames) {
    if (!this._(carNames)) throw new CustomError.inputCarName();
  }

  // TODO: 이름들끼리 중복되지 않아야 유효, 2대 이상만 유효, 공백이거나 빈문자열이면 안됨
  static validateInputCars(carNames) {
    if (!this._(carNames)) throw new CustomError.inputCarName();
  }
}

export default CarNameValidator;
