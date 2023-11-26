const INPUT_MESSAGE = Object.freeze({
  requireUserNumber: '숫자를 입력해주세요 : ',
  requireUserCommand: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  startGame: '숫자 야구 게임을 시작합니다.',
  completeGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

const ERROR_MESSAGE = Object.freeze('[ERROR]');

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
