import EmptyInputValidator from '../validators/EmptyInputValidator.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.requireCarNames);

    EmptyInputValidator.validateNotEmptyInput(carNames);

    return carNames;
  }

  async readRoundNumber() {
    const roundNumber = await Console.readLineAsync(INPUT_MESSAGE.requireRoundNumber);

    EmptyInputValidator.validateNotEmptyInput(roundNumber);

    return roundNumber;
  }
}

export default InputView;
