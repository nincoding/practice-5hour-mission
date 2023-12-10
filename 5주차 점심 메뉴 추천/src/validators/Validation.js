import { splitString } from '../helpers/helpers.js';
import { MENU } from '../constants/constant.js';

const Validation = {
  isEmptyString(input) {
    return String(input).trim() === '';
  },

  isValidMinCount(input, minCount) {
    const inputsArray = splitString(input);

    return inputsArray.length >= minCount;
  },

  isValidMaxCount(input, maxCount) {
    const inputsArray = splitString(input);

    return inputsArray.length <= maxCount;
  },

  isValidLength(input, minLength, maxLength) {
    return input.length >= minLength && input.length <= maxLength;
  },

  isContain(input) {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => menu.menu);
    });

    return allMenus.includes(input);
  },
};

export default Validation;
