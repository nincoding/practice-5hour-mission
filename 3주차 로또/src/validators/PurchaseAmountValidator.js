import CustomError from '../errors/CustomError.js';
import { isNumeric, isInteger } from '../helpers/helpers.js';
import { LOTTO_CONDITION } from '../constants/constants.js';

class PurchaseAmountValidator {
  static validatePurchaseAmount(purchaseAmount) {
    if (!(isNumeric(purchaseAmount) && isInteger(purchaseAmount))) {
      throw CustomError.purchaseAmount();
    }
    if (!this.#isValidMinAmount(purchaseAmount)) throw CustomError.purchaseAmount();
    if (!this.#isValidCondition(purchaseAmount)) throw CustomError.purchaseAmount();
  }

  static #isValidMinAmount(purchaseAmount) {
    return purchaseAmount >= LOTTO_CONDITION.lottoPrize;
  }

  static #isValidCondition(purchaseAmount) {
    return purchaseAmount % LOTTO_CONDITION.lottoPrize === 0;
  }
}

export default PurchaseAmountValidator;
