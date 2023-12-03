const LOTTO_CONDITION = Object.freeze({
  lottoPrize: 1000,
  lottoLength: 6,
  minRange: 1,
  maxRange: 45,
});

const INIT_STATISTIC = {
  fifthPrize: 0,
  fourthPrize: 0,
  thirdPrize: 0,
  secondPrize: 0,
  firstPrize: 0,
};

const SYMBOL = Object.freeze({
  emptyString: '',
  spaceLine: '\n',
  comma: ',',
});

export { LOTTO_CONDITION, INIT_STATISTIC, SYMBOL };
