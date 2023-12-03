import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

class OutputView {
  printErrorMessage(messages) {
    Console.print(messages);
  }

  printPurchaseTicket(ticket) {
    Console.print(OUTPUT_MESSAGE.printPurchaseTicket(ticket));
  }
}

export default OutputView;
