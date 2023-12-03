import Purchase from '../models/Purchase.js';
import { errorHandler, splitInput } from '../helpers/helpers.js';
import Lotto from '../Lotto.js';
import LottoValidator from '../validators/LottoValidator.js';

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

    const winningLotto = await errorHandler(
      async () => await this.#requireWinningNumber(),
      printError
    );

    const bonusNumber = await errorHandler(
      async () => await this.#requireBonusNumber(winningLotto),
      printError
    );
  }

  async #requirePurchaseAmount() {
    const inputPurshaseAmount = await this.#inputView.readPurchaseAmount();

    const purchaseAmount = Number(inputPurshaseAmount);
    const purchase = new Purchase(purchaseAmount);
    const ticket = purchase.getTicketAmount();

    this.#domain = new this.#domain(ticket);
    const lottos = this.#domain.getLottoTickets();

    this.#outputView.printPurchaseTicket(ticket);
    this.#outputView.printLottoTicket(lottos);
  }

  async #requireWinningNumber() {
    const inputWinningNumber = await this.#inputView.readWinningNumber();

    const winningNumber = splitInput(inputWinningNumber);
    const winningLotto = new Lotto(winningNumber);

    return winningLotto.getLottoSortedNumbers();
  }

  async #requireBonusNumber(winningLotto) {
    const inputBonusNumber = await this.#inputView.readBonusNumber();

    const bonusNumber = Number(inputBonusNumber);

    LottoValidator.validateLottoNumber(bonusNumber);

    if (winningLotto.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 중복되지 않아야 합니다.');
    }

    return bonusNumber;
  }
}

export default LottoMachineController;
