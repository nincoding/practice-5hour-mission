import { CALENDAR, CATEGORY, MENU } from '../constants/constant.js';

const Discount = {
  christmasDayDiscount(date) {
    const isEventCondition = date <= CALENDAR.christmas;
    const calcDiscount = 1000 + (date - 1) * 100;
    const discountAmount = isEventCondition ? calcDiscount : 0;

    return discountAmount;
  },

  weekdayDiscount(date, order) {
    const isEventCondition = !CALENDAR.weekend.includes(date);
    const discountMenus = MENU[CATEGORY.dessert].map((item) => item.menu);
    const calcDiscount = this.calcDiscountMenu(order, discountMenus);
    const discountAmount = isEventCondition ? calcDiscount : 0;

    return discountAmount;
  },

  weekendDiscount(date, order) {
    const isEventCondition = CALENDAR.weekend.includes(date);
    const discountMenus = MENU[CATEGORY.main].map((item) => item.menu);
    const calcDiscount = this.calcDiscountMenu(order, discountMenus);
    const discountAmount = isEventCondition ? calcDiscount : 0;

    return discountAmount;
  },

  specialDiscount(date) {
    const isEventCondition = CALENDAR.special.includes(date);
    const discountAmount = isEventCondition ? 1000 : 0;

    return discountAmount;
  },

  presentDiscount(present) {
    if (present === null) return 0;
    const presentMenu = MENU[CATEGORY.drink].find((item) => item.menu === Object.keys(present)[0]);
    const presentPrice = presentMenu.prize * Object.values(present)[0];

    return presentPrice;
  },

  calcDiscountMenu(order, discountMenus) {
    return order.reduce((acc, item) => {
      if (discountMenus.includes(item.menu)) {
        const menuDiscount = item.count * 2023;

        return acc + menuDiscount;
      }
      return acc;
    }, 0);
  },
};

export default Discount;
