import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printStart() {
    Console.print(OUTPUT_MESSAGE.printStart());
  },
};

export default OutputView;
