const INPUT_MESSAGE = Object.freeze({
  requireCarNames: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  requireRoundNumber: `시도할 횟수는 몇 회인가요?\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  printResultMessage: '실행 결과',
  printWinnerMessage: '최종 우승자',
});

const SYMBOL = Object.freeze({
  printColon: ' : ',
  printProgress: '-',
});

const PREFIX_ERROR = Object.freeze('[ERROR]');

const ERROR_MESSAGE = Object.freeze({
  invalidInput: '유효하지 않은 입력값입니다.',
  invalidCarName: '이름이 잘못된 형식입니다.',
  invalidRoundNumber: '숫자가 잘못된 형식입니다.',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, PREFIX_ERROR, ERROR_MESSAGE, SYMBOL };
