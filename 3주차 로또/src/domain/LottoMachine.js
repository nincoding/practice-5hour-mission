import Lotto from '../Lotto.js';
import CustomError from '../errors/CustomError.js';
import { randomNumberGenerator } from '../helpers/helpers.js';
import { INIT_STATISTIC, PRIZE } from '../constants/constants.js';

class LottoMachine {
  #lottoTickets = [];

  constructor(ticket) {
    if (!ticket) throw CustomError.Ticket();

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

  getWinStatistics(matchingData) {
    const resultStatistics = { ...INIT_STATISTIC };

    matchingData.forEach(({ matchingCount, hasBonusNumber }) => {
      this.#calcStatistics(resultStatistics, matchingCount, hasBonusNumber);
    });

    return resultStatistics;
  }

  getTotalPrize(resultStatistics) {
    return Object.entries(resultStatistics).reduce((acc, [prizeKey, count]) => {
      return acc + PRIZE[prizeKey] * count;
    }, 0);
  }

  getProfitRatio(totalPrize, purchaseAmount) {
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  #createLottoTickets(ticket) {
    return Array.from({ length: ticket }, () => {
      return new Lotto(randomNumberGenerator());
    });
  }

  #calcStatistics(resultStatistics, matchingCount, hasBonusNumber) {
    if (matchingCount === 6) resultStatistics.firstPrize += 1;
    if (matchingCount === 5 && hasBonusNumber) resultStatistics.secondPrize += 1;
    if (matchingCount === 5 && !hasBonusNumber) resultStatistics.thirdPrize += 1;
    if (matchingCount === 4) resultStatistics.fourthPrize += 1;
    if (matchingCount === 3) resultStatistics.fifthPrize += 1;
  }
}

export default LottoMachine;
