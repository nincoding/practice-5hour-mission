import { SYMBOL } from './constants.js';

const INPUT_MESSAGE = Object.freeze({
  requirePurchaseAmount: `구입금액을 입력해 주세요.${SYMBOL.spaceLine}`,
  requireWinningNumber: `당첨 번호를 입력해 주세요.${SYMBOL.spaceLine}`,
  requireBonusNumber: `보너스 번호를 입력해 주세요.${SYMBOL.spaceLine}`,
});

const OUTPUT_MESSAGE = Object.freeze({
  print_: '',
});

const PREFIX_ERROR = Object.freeze('[ERROR]');

const ERROR_MESSAGE = Object.freeze({
  invalidInput: '유효하지 않은 입력값입니다.',
  invalidPurchaseAmount: '숫자가 잘못된 형식입니다.',
  invalidLotto: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, PREFIX_ERROR, ERROR_MESSAGE };
