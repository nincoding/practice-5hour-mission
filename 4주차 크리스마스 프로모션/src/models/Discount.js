import { CALENDAR } from '../constants/constant.js';

const Discount = {
  christmasDayDiscount(date) {
    const isEventCondition = date <= CALENDAR.christmas;
    const discountAmount = 1000 + (date - 1) * 100;

    return isEventCondition ? discountAmount : null;
  },

  weekdayDiscount(date, order) {},

  weekendDiscount(date, order) {},

  specialDiscount(date) {},
};

export default Discount;
