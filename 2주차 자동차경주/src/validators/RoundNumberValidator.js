import CustomError from '../errors/CustomError.js';
import { isNumeric, isInteger } from '../helpers/helpers.js';
import { RACING_CONDITION } from '../constants/constants.js';

class RoundNumberValidator {
  static validateRoundNumber(round) {
    if (!this.#isValidRange(round)) throw CustomError.roundNumber();
    if (!isNumeric(round) || !isInteger(round)) throw CustomError.roundNumber();
  }

  static #isValidRange(round) {
    return round > RACING_CONDITION.startRange;
  }
}

export default RoundNumberValidator;
