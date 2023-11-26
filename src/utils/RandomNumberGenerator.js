import { Random } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from '../constants/constants.js';

const RandomNumberGenerator = () => {
  return Random.pickNumberInRange(NUMBER_CONDITION.minRange, NUMBER_CONDITION.maxRange);
};

export default RandomNumberGenerator;
