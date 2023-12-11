const LOTTO_CONDITION = Object.freeze({
  lottoPrize: 1000,
  lottoLength: 6,
  minRange: 1,
  maxRange: 45,
});

const PRIZE = Object.freeze({
  fifthPrize: 5_000,
  fourthPrize: 50_000,
  thirdPrize: 1_500_000,
  secondPrize: 30_000_000,
  firstPrize: 2_000_000_000,
});

const INIT_STATISTIC = Object.freeze({
  fifthPrize: 0,
  fourthPrize: 0,
  thirdPrize: 0,
  secondPrize: 0,
  firstPrize: 0,
});

const SYMBOL = Object.freeze({
  emptyString: '',
  spaceLine: '\n',
  comma: ',',
});

export { LOTTO_CONDITION, PRIZE, INIT_STATISTIC, SYMBOL };
