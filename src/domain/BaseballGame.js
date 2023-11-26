import { NUMBER_CONDITION } from '../constants/constants.js';

class BaseballGame {
  #computerNumber;
  #compareResult;
  #isCompleteCondition = false;

  constructor(computerNumberGenerator) {
    this.#computerNumber = computerNumberGenerator.getComputerNumber();
  }

  getCompleteCondition() {
    return this.#isCompleteCondition;
  }

  getCompareResult(userNumber) {
    this.#compareResult = this.#countCompareNumbers(userNumber);

    this.#compareResult.strike === NUMBER_CONDITION.completeMaxMatching
      ? (this.#isCompleteCondition = true)
      : (this.#isCompleteCondition = false);

    return this.#compareResult;
  }

  #countCompareNumbers(userNumber) {
    return [...String(this.#computerNumber)].reduce(
      (result, number, index) => ({
        ball:
          result.ball +
          (String(userNumber)[index] !== number && String(userNumber).includes(number)),
        strike: result.strike + (String(userNumber)[index] === number),
      }),
      { ball: 0, strike: 0 }
    );
  }
}

export default BaseballGame;
