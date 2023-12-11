import LottoValidator from '../validators/LottoValidator';

class Bonus {
  #bonusNumber;

  constructor(number, winningLotto) {
    LottoValidator.validateLottoNumber(number, winningLotto);
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
