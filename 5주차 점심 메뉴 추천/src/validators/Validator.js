import CustomError from '../errors/CustomError.js';
import Validation from './Validation.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

const Validator = {
  validateCoachNames(input) {
    if (Validation.isEmptyString(input)) {
      throw new CustomError(ERROR_MESSAGE.invalidNamesMinCount);
    }

    if (!Validation.isValidMinCount(input, 2)) {
      throw new CustomError(ERROR_MESSAGE.invalidNamesMinCount);
    }

    if (!Validation.isValidMaxCount(input, 5)) {
      throw new CustomError(ERROR_MESSAGE.invalidNamesMaxCount);
    }
  },

  validateName(name) {
    if (Validation.isEmptyString(name) || !Validation.isValidLength(name, 2, 4)) {
      throw new CustomError(ERROR_MESSAGE.invalidNameLength);
    }
  },

  validateHateMenus(input) {
    if (!Validation.isValidMaxCount(input, 2)) {
      throw new CustomError(ERROR_MESSAGE.invalidHateMenuMaxCount);
    }

    if (!Validation.isEmptyString(input) && !Validation.isContain(input)) {
      throw new CustomError(ERROR_MESSAGE.invalidContainMenu);
    }
  },
};

export default Validator;
