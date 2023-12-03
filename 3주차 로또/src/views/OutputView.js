import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

class OutputView {
  printErrorMessage(messages) {
    Console.print(messages);
  }

  print_() {
    Console.print(OUTPUT_MESSAGE.print_);
  }
}

export default OutputView;
