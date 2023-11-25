import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  async readUserNumber() {
    const userNumber = await Console.readLineAsync(INPUT_MESSAGE.requireUserNumber);

    return Number(userNumber);
  },

  async readUserCommand() {
    const userCommand = await Console.readLineAsync(INPUT_MESSAGE.requireUserCommand);

    return Number(userCommand);
  },
};

export default InputView;
