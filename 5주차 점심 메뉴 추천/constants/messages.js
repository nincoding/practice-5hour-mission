const INPUT_MESSAGE = Object.freeze({
  requireCoachNames: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  requireHateMenus: (coachName) => `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  printStart: '점심 메뉴 추천을 시작합니다.',
});

const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  invalid_: '',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
