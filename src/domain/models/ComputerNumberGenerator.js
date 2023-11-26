import { Random } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from '../../constants/constants.js';

class ComputerNumberGenerator {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.#createRandomNumber();
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  #createRandomNumber() {
    const uniqueSetNumbers = new Set();

    while (uniqueSetNumbers.size < NUMBER_CONDITION.validLength) {
      const randomNumber = Random.pickNumberInRange(
        NUMBER_CONDITION.minRange,
        NUMBER_CONDITION.maxRange
      );

      uniqueSetNumbers.add(randomNumber);
    }

    return parseInt([...uniqueSetNumbers].join(''), 10);
  }
}

export default ComputerNumberGenerator;
