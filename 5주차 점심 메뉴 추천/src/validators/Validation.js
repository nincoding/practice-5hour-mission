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
    const allMenus = Object.values(MENU).flatMap((category) => category.split(', '));
    const inputMenus = splitString(input);
    const allMenusIncludeInputMenus = inputMenus.every((menu) => allMenus.includes(menu));

    return allMenusIncludeInputMenus;
  },
};

export default Validation;
