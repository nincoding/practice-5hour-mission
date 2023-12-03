import Lotto from '../Lotto.js';
import Bonus from '../models/Bonus.js';
import Purchase from '../models/Purchase.js';
import { errorHandler, splitInput } from '../helpers/helpers.js';

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
    const { purchaseAmount, ticket, lottos, winningLotto, bonusNumber } =
      await this.#initInputData();

    const matchingData = this.#domain.getMatchingLottos(winningLotto, bonusNumber);
    const winStatistics = this.#domain.getWinStatistics(matchingData);
    const totalPrize = this.#domain.getTotalPrize(winStatistics);
    const profitRatio = this.#domain.getProfitRatio(totalPrize, purchaseAmount);

    this.#printResult(ticket, lottos, winStatistics, profitRatio);
  }

  async #requirePurchaseAmount() {
    const inputPurchaseAmount = await this.#inputView.readPurchaseAmount();

    const purchaseAmount = Number(inputPurchaseAmount);
    const purchase = new Purchase(purchaseAmount);

    const ticket = purchase.getTicketAmount();
    this.#domain = new this.#domain(ticket);
    const lottos = this.#domain.getLottoTickets();

    return { purchaseAmount, ticket, lottos };
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
    const bonus = new Bonus(bonusNumber, winningLotto);

    return bonus.getBonusNumber();
  }

  async #initInputData() {
    const printError = (message) => this.#outputView.printErrorMessage(message);

    const { purchaseAmount, ticket, lottos } = await errorHandler(
      async () => await this.#requirePurchaseAmount(),
      printError
    );

    const winningLotto = await errorHandler(
      async () => await this.#requireWinningNumber(),
      printError
    );

    const bonusNumber = await errorHandler(
      async () => await this.#requireBonusNumber(winningLotto),
      printError
    );

    return { purchaseAmount, ticket, lottos, winningLotto, bonusNumber };
  }

  #printResult(ticket, lottos, winStatistics, profitRatio) {
    this.#outputView.printPurchaseTicket(ticket);
    this.#outputView.printLottoTicket(lottos);
    this.#outputView.printWinsStatistics(winStatistics);
    this.#outputView.printProfitRatio(profitRatio);
  }
}

export default LottoMachineController;
