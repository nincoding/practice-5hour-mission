import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, SYMBOL } from '../constants/messages.js';

class OutputView {
  printErrorMessage(messages) {
    Console.print(messages);
  }

  printResultMessage() {
    Console.print(OUTPUT_MESSAGE.printResultMessage);
  }

  // TODO: 각 실행결과를 자동차 이름 : 전진값마다 -로 출력 포맷
  printRoundResult(roundResult) {
    Console.print(roundResult);
  }

  // TODO: 최종 우승자 배열로 전달받으면 콤마로 구분
  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.printWinnerMessage}${winners}`);
  }
}

export default OutputView;
