import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

class OutputView {
  printErrorMessage(messages) {
    Console.print(messages);
  }

  printPurchaseTicket(ticket) {
    Console.print(OUTPUT_MESSAGE.printPurchaseTicket(ticket));
  }

  printLottoTicket(lottoTicket) {
    const lottos = lottoTicket.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`${lottos}\n`);
  }
}

export default OutputView;
