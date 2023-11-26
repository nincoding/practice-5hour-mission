import { NUMBER_CONDITION, DECIMAL_NUMBER } from '../../constants/constants.js';

class ComputerNumberGenerator {
  #computerNumber;

  constructor(randomNumberGenerator) {
    this.#computerNumber = this.#createRandomNumber(randomNumberGenerator);
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  #createRandomNumber(randomNumberGenerator) {
    const uniqueSetNumbers = new Set();

    while (uniqueSetNumbers.size < NUMBER_CONDITION.validLength) {
      const randomNumber = randomNumberGenerator();

      uniqueSetNumbers.add(randomNumber);
    }

    return parseInt([...uniqueSetNumbers].join(''), DECIMAL_NUMBER);
  }
}

export default ComputerNumberGenerator;
