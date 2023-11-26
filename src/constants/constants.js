const USER_COMMAND = Object.freeze({
  retry: 1,
  end: 2,
});

const GAME_RESULT = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
});

const NUMBER_CONDITION = Object.freeze({
  minRange: 1,
  maxRange: 9,
  validLength: 3,
  completeMaxMatching: 3,
});

export { USER_COMMAND, GAME_RESULT, NUMBER_CONDITION };
