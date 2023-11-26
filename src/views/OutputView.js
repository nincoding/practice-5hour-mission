import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';
import { GAME_RESULT } from '../constants/constants.js';

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.startGame);
  },

  printCompareResult(ball, strike) {
    if (ball === 0 && strike === 0) return Console.print(GAME_RESULT.nothing);
    if (ball > 0 && strike === 0) return Console.print(`${ball}${GAME_RESULT.ball}`);
    if (ball === 0 && strike > 0) return Console.print(`${strike}${GAME_RESULT.strike}`);
    if (ball > 0 && strike > 0)
      return Console.print(`${ball}${GAME_RESULT.ball} ${strike}${GAME_RESULT.strike}`);
  },

  printCompleteMessage() {
    Console.print(OUTPUT_MESSAGE.completeGame);
  },
};

export default OutputView;
