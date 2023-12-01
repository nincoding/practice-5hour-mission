import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, SYMBOL } from '../constants/messages.js';

class OutputView {
  printErrorMessage(messages) {
    Console.print(messages);
  }

  printResultMessage() {
    Console.print(OUTPUT_MESSAGE.printResultMessage);
  }

  printRoundResult(roundResult) {
    let resultMessage = SYMBOL.emptyString;

    roundResult.forEach(({ carName, countProgress }) => {
      const formatProgress = SYMBOL.printProgress.repeat(countProgress);

      resultMessage += `${carName}${SYMBOL.printColon}${formatProgress}${SYMBOL.spaceLine}`;
    });

    Console.print(resultMessage);
  }

  printWinners(winners) {
    let resultMessage = SYMBOL.emptyString;

    resultMessage += `${OUTPUT_MESSAGE.printWinnerMessage}${SYMBOL.printColon}${winners.join(
      SYMBOL.commaSpace
    )}`;

    Console.print(resultMessage);
  }
}

export default OutputView;
