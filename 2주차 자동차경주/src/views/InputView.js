import CarNameValidator from '../validators/CarNameValidator.js';
import RoundNumberValidator from '../validators/RoundNumberValidator.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.requireCarNames);

    CarNameValidator.validateInputCars(carNames);

    return carNames;
  }

  async readRoundNumber() {
    const roundNumber = await Console.readLineAsync(INPUT_MESSAGE.requireRoundNumber);

    RoundNumberValidator.validateInputRound(roundNumber);

    return roundNumber;
  }
}

export default InputView;
