import CustomError from '../errors/CustomError.js';
import { splitArray, splitString, sumArray } from '../helpers/helper.js';
import Validation from './Validation.js';

const Validator = {
  validateDate(input) {
    const validateEmptyString = Validation.isEmptyString(input);
    const validateInteger = Validation.isValidInteger(input);
    const validateRange = Validation.isValidRange(input, 1, 31);

    if (validateEmptyString || !validateInteger || !validateRange) {
      throw new CustomError('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  validateOrder(input) {
    const validateEmptyString = Validation.isEmptyString(input);
    const splitInput = splitString(input);
    const validateFormat = Validation.isFormat(splitInput);
    const [menus, counts] = splitArray(splitInput);

    if (validateEmptyString || !validateFormat) {
      throw new CustomError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    this.validateMenu(menus);
    this.validateCount(counts);
  },

  validateMenu(menus) {
    const validateUniqueMenus = Validation.isUnique(menus);

    const validateContainMenus = menus.every((menu) => {
      return Validation.isContain(menu);
    });
    const validateOnlyDrink = menus.every((menu) => {
      return Validation.isOnlyDrink(menu);
    });

    if (!validateUniqueMenus || !validateContainMenus || validateOnlyDrink) {
      throw new CustomError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  validateCount(counts) {
    const sumCount = sumArray(counts);
    const validateRangeCounts = Validation.isValidRange(sumCount, 1, 20);

    if (!validateRangeCounts) {
      throw new CustomError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
};

export default Validator;
