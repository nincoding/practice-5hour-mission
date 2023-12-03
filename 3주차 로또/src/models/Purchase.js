import PurchaseAmountValidator from '../validators/PurchaseAmountValidator.js';
import { LOTTO_CONDITION } from '../constants/constants.js';

class Purchase {
  #purchaseAmount;
  #ticketAmount;

  constructor(purchaseAmount) {
    PurchaseAmountValidator.validatePurchaseAmount(purchaseAmount);

    this.#purchaseAmount = purchaseAmount;

    this.#calcTicketAmount();
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getTicketAmount() {
    return this.#ticketAmount;
  }

  #calcTicketAmount() {
    this.#ticketAmount = this.#purchaseAmount / LOTTO_CONDITION.lottoPrize;
  }
}

export default Purchase;
