import Validator from '../../validators/Validator.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../../constants/messages.js';

const InputView = {
  async readCoachNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.requireCoachNames);

    Validator.validateCoachNames(input);

    return input;
  },

  async readHateMenus(coachName) {
    const input = await Console.readLineAsync(INPUT_MESSAGE.requireHateMenus(coachName));

    Validator.validateHateMenus(input);

    return input;
  },
};

export default InputView;
