import Purchase from '../models/Purchase.js';
import { errorHandler } from '../helpers/helpers.js';

class LottoMachineController {
  #domain;
  #inputView;
  #outputView;

  constructor(domain, view) {
    this.#domain = domain;
    this.#inputView = view.inputView;
    this.#outputView = view.outputView;
  }

  async start() {
    const printError = (message) => this.#outputView.printErrorMessage(message);

    await errorHandler(async () => await this.#requirePurchaseAmount(), printError);
  }

  async #requirePurchaseAmount() {
    const inputPurshaseAmount = await this.#inputView.readPurchaseAmount();

    const purchaseAmount = parseInt(inputPurshaseAmount, 10);
    const purchase = new Purchase(purchaseAmount);
    const ticket = purchase.getTicketAmount();

    this.#outputView.printPurchaseTicket(ticket);
  }
}

export default LottoMachineController;
