import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.startGame);
  },

  // todo: 볼, 스트라이크, 낫싱 분기
  printCompareResult(gameResult) {
    Console.print();
  },

  printCompleteMessage() {
    Console.print(OUTPUT_MESSAGE.completeGame);
  },
};

export default OutputView;
