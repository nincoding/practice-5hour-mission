import { CALENDAR } from '../constants/constant.js';

const Discount = {
  christmasDayDiscount(date) {
    const isEventCondition = date <= CALENDAR.christmas;
    const calcDiscount = 1000 + (date - 1) * 100;
    const discountAmount = isEventCondition ? calcDiscount : null;

    return discountAmount;
  },

  weekdayDiscount(date, order) {},

  weekendDiscount(date, order) {},

  specialDiscount(date) {
    const isEventCondition = CALENDAR.special.includes(date);
    const discountAmount = isEventCondition ? 1000 : null;

    return discountAmount;
  },
};

export default Discount;
