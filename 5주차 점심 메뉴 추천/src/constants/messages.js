const INPUT_MESSAGE = Object.freeze({
  requireCoachNames: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  requireHateMenus: (coachName) => `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  printStart: '점심 메뉴 추천을 시작합니다.',
  printRecommendResult: '메뉴 추천 결과입니다.',
  printEnd: '추천을 완료했습니다.',
});

const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  invalidNameLength: '코치의 이름은 최소 2글자, 최대 4글자 이상 입력해야 합니다.',
  invalidNamesMinCount: '코치는 최소 2명 이상 입력해야 합니다.',
  invalidNamesMaxCount: '코치는 최대 5명 이상 입력해야 합니다.',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
