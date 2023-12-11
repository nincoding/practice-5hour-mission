import EmptyInputValidator from '../validators/EmptyInputValidator.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.requirePurchaseAmount);

    EmptyInputValidator.validateNotEmptyInput(purchaseAmount);

    return purchaseAmount;
  }

  async readWinningNumber() {
    const winningNumber = await Console.readLineAsync(INPUT_MESSAGE.requireWinningNumber);

    EmptyInputValidator.validateNotEmptyInput(winningNumber);

    return winningNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.requireBonusNumber);

    EmptyInputValidator.validateNotEmptyInput(bonusNumber);

    return bonusNumber;
  }
}

export default InputView;
