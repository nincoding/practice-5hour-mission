import { MENU, CATEGORY } from '../constants/constant.js';

const Validation = {
  isEmptyString(input) {
    return String(input).trim() === '';
  },

  isValidInteger(input) {
    return !this.isEmptyString(input) && Number.isInteger(Number(input)) && Number(input) > 0;
  },

  isValidRange(input, minRange, maxRange) {
    return Number(input) >= minRange && Number(input) <= maxRange;
  },

  isUnique(input) {
    const uniqueInput = new Set(input);

    return uniqueInput.size === input.length;
  },

  isFormat(input) {
    return input.every((item) => {
      const [key, value] = item.split('-');

      return !this.isEmptyString(key) && this.isValidInteger(value);
    });
  },

  isContain(input) {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => menu.menu);
    });

    return allMenus.includes(input);
  },

  isOnlyDrink(input) {
    const drinkMenu = MENU[CATEGORY.drink].map((item) => item.menu);

    return drinkMenu.includes(input);
  },
};

export default Validation;
