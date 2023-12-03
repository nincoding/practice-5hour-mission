import Lotto from '../Lotto.js';
import { randomNumberGenerator } from '../helpers/helpers.js';

class LottoMachine {
  #lottoTickets = [];

  constructor(ticket) {
    this.#lottoTickets = this.#createLottoTickets(ticket);
  }

  getLottoTickets() {
    return this.#lottoTickets.map((lotto) => lotto.getLottoSortedNumbers());
  }

  getMatchingLottos(winningNumbers, bonusNumber) {
    return this.#lottoTickets.map((lotto) => {
      return lotto.getMatchingResult(winningNumbers, bonusNumber);
    });
  }

  #createLottoTickets(ticket) {
    return Array.from({ length: ticket }, () => {
      return new Lotto(randomNumberGenerator());
    });
  }
}

export default LottoMachine;

/*
const app = new LottoMachine(2);
const winningNumbers = [1, 7, 20, 26, 33, 34];
const bonusNumber = 3;
console.log(app.getLottoTickets());
console.log(app.getMatchingLottos(winningNumbers, bonusNumber));
*/
