import CustomError from '../errors/CustomError.js';
import { isNumeric, isInteger } from '../helpers/helpers.js';
import { LOTTO_CONDITION } from '../constants/constants.js';

class LottoValidator {
  static validateLotto(lotto) {
    if (!this.#isValidLottoLength(lotto)) throw CustomError.lotto();
    if (!this.#isValidUniqueLotto(lotto)) throw CustomError.lotto();
  }

  static validateLottoNumber(number) {
    if (!(isNumeric(number) && isInteger(number))) {
      throw CustomError.lotto();
    }
    if (!this.#isValidRange(number)) throw CustomError.lotto();
  }

  static #isValidLottoLength(lotto) {
    return lotto.length === LOTTO_CONDITION.lottoLength;
  }

  static #isValidUniqueLotto(lotto) {
    const uniqueLotto = new Set(lotto);

    return uniqueLotto.size === LOTTO_CONDITION.lottoLength;
  }

  static #isValidRange(number) {
    return number >= LOTTO_CONDITION.minRange && number <= LOTTO_CONDITION.maxRange;
  }
}

export default LottoValidator;
