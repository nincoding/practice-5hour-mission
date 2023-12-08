import { CATEGORY, MENU, MENU_PRIZE } from '../constants/constant.js';
import { splitString } from '../helpers/helper.js';

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
    const menu = Object.keys(MENU_PRIZE);

    return menu.includes(input);
  },

  isOnlyDrink(input) {
    const drinkMenu = splitString(MENU[CATEGORY.drink]);

    return drinkMenu.includes(input);
  },
};

export default Validation;
