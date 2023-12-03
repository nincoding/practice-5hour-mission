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

    const inputPurshaseAmount = await errorHandler(
      async () => await this.#inputView.readPurchaseAmount(),
      printError
    );

    const purshanseAmount = parseInt(inputPurshaseAmount, 10);
  }
}

export default LottoMachineController;
