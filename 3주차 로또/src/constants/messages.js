import { SYMBOL } from './constants.js';

const INPUT_MESSAGE = Object.freeze({
  requirePurchaseAmount: `구입금액을 입력해 주세요.${SYMBOL.spaceLine}`,
  requireWinningNumber: `당첨 번호를 입력해 주세요.${SYMBOL.spaceLine}`,
  requireBonusNumber: `보너스 번호를 입력해 주세요.${SYMBOL.spaceLine}`,
});

const OUTPUT_MESSAGE = Object.freeze({
  printPurchaseTicket: (ticket) => `${SYMBOL.spaceLine}${ticket}개를 구매했습니다.`,
});

const PREFIX_ERROR = Object.freeze('[ERROR]');

const ERROR_MESSAGE = Object.freeze({
  invalidInput: '유효하지 않은 입력값입니다.',
  invalidTypeNumber: '숫자가 잘못된 형식입니다.',
  invalidLottoRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidLottoLength: '로또 번호는 6개여야 합니다.',
  invalidLottoUnique: '로또 번호는 중복되지 않아야 합니다.',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, PREFIX_ERROR, ERROR_MESSAGE };
