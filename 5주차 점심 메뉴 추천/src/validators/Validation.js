import { MENU } from '../constants/constant.js';

const Validation = {
  isEmptyString(input) {
    return String(input).trim() === '';
  },

  isUnique(input) {
    const uniqueInput = new Set(input);

    return uniqueInput.size === input.length;
  },

  isContain(input) {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => menu.menu);
    });

    return allMenus.includes(input);
  },
};

export default Validation;
