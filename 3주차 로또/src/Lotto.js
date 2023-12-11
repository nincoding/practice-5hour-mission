import LottoValidator from './validators/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoSortedNumbers() {
    return [...this.#numbers].sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  getMatchingResult(winningNumbers, bonusNumber) {
    const matchingCount = this.calcMatchingNumber(winningNumbers);
    const hasBonusNumber = this.isContainBonusNumber(bonusNumber);

    return { matchingCount, hasBonusNumber };
  }

  isContainBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  calcMatchingNumber(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  #validate(numbers) {
    LottoValidator.validateLotto(numbers);

    numbers.some((number) => {
      LottoValidator.validateLottoNumber(number);
    });
  }
}

export default Lotto;
