const CAR_NAME_CONDITION = Object.freeze({
  minLength: 1,
  maxLength: 5,
  minCount: 2,
});

const RACING_CONDITION = Object.freeze({
  startRange: 0,
  endRandge: 9,
  minPassNumber: 4,
  endRound: 0,
  oneStep: 1,
});

const DECIMAL = Object.freeze(10);

const SYMBOL = Object.freeze({
  printColon: ' : ',
  printProgress: '-',
  comma: ',',
  emptyString: '',
  commaSpace: ', ',
  spaceLine: '\n',
});

export { CAR_NAME_CONDITION, RACING_CONDITION, DECIMAL, SYMBOL };
