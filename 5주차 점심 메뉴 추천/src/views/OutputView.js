import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';
import { SYMBOL } from '../constants/constant.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printStart() {
    Console.print(OUTPUT_MESSAGE.printStart);
  },

  printResult(result) {
    Console.print(OUTPUT_MESSAGE.printRecommendResult);

    for (const row of result) {
      const header = Object.keys(row)[0];
      const values = row[header];

      const formattedRow = this.formatRow(header, values);

      Console.print(formattedRow);
    }

    Console.print(OUTPUT_MESSAGE.printEnd);
  },

  formatRow(header, values) {
    const headerRow = `${SYMBOL.headerStart}${header}${SYMBOL.separatorBar}${values.join(
      SYMBOL.separatorBar
    )}${SYMBOL.headerEnd}`;

    return headerRow;
  },
};

export default OutputView;
