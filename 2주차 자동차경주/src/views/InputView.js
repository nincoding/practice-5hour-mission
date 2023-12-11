import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  constructor(validator) {
    this.validator = validator;
  }

  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.requireCarNames);

    this.validator.validateNotEmptyInput(carNames);

    return carNames;
  }

  async readRoundNumber() {
    const roundNumber = await Console.readLineAsync(INPUT_MESSAGE.requireRoundNumber);

    this.validator.validateNotEmptyInput(roundNumber);

    return roundNumber;
  }
}

export default InputView;
