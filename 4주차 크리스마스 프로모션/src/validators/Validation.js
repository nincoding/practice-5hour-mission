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
    const items = input.split(',');
    const uniqueInput = new Set(items);

    return uniqueInput.size === items.length;
  },

  isFormat(input) {
    const items = input.split(',');

    return items.every((item) => {
      const [key, value] = item.split('-');

      return !this.isEmptyString(key) && this.isValidInteger(value);
    });
  },

  // TODO: 고객이 메뉴판에 없는 메뉴를 입력하는 경우
  isContain() {
    //...
  },

  // TODO: 음료만 주문했는지 확인
  isOnlyDrink() {
    //...
  },
};

export default Validation;
