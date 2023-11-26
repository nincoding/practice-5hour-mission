import { isNumeric, isInteger } from '../../utils/NumericValidation.js';
import { NUMBER_CONDITION, USER_COMMAND } from '../../constants/constants.js';
import { ERROR_MESSAGE } from '../../constants/messages.js';

class InputValidator {
  static validateUserNumber(userNumber) {
    const numberArray = Array.from(String(userNumber), (digit) => Number(digit));

    if (!this.isEveryValidNumber(numberArray)) throw new Error(ERROR_MESSAGE);
    if (!this.isValidUnique(numberArray)) throw new Error(ERROR_MESSAGE);
  }

  static validateUserCommand(userCommand) {
    if (userCommand !== USER_COMMAND.retry && userCommand !== USER_COMMAND.end)
      throw new Error(ERROR_MESSAGE);
  }

  static isEveryValidNumber(numberArray) {
    return numberArray.every((number) => {
      return isNumeric(number) && isInteger(number) && this.isValidRange(number);
    });
  }

  static isValidRange(number) {
    return number >= NUMBER_CONDITION.minRange && number <= NUMBER_CONDITION.maxRange;
  }

  static isValidUnique(numberArray) {
    const uniqueSetNumber = new Set(numberArray);

    return uniqueSetNumber.size === NUMBER_CONDITION.validLength;
  }
}

export default InputValidator;
