import Discount from '../models/Discount.js';
import Event from '../models/Event.js';
import { CATEGORY, MENU } from '../constants/constant.js';

class EventCalendar {
  #totalOrderAmount;

  constructor(date, order) {
    this.date = date;
    this.order = order;
    this.#totalOrderAmount = this.#calcTotalOrderAmount();
  }

  getTotalOrderAmount() {
    return this.#calcTotalOrderAmount;
  }

  getBenefitsHistory() {
    const isEventCondition = this.#totalOrderAmount >= 10_000;
    const benefitsHistory = isEventCondition ? this.#calcBenefitsHistory() : null;

    return benefitsHistory;
  }

  getPresent() {
    return Event.present(this.#totalOrderAmount);
  }

  #calcTotalOrderAmount() {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => ({ [menu.menu]: menu.prize }));
    });

    const totalOrderAmount = this.order.reduce((total, { menu, count }) => {
      return total + allMenus.find(({ [menu]: price }) => price)[menu] * count;
    }, 0);

    return totalOrderAmount;
  }

  #calcBenefitsHistory() {
    const benefitsHistory = [];
    const addEventToHistory = (eventName, discountAmount) => {
      if (discountAmount !== null && discountAmount !== 0) {
        benefitsHistory.push({ [eventName]: discountAmount });
      }
    };

    addEventToHistory('크리스마스 디데이 할인', Discount.christmasDayDiscount(this.date));
    addEventToHistory('평일 할인', Discount.weekdayDiscount(this.date, this.order));
    addEventToHistory('주말 할인', Discount.weekendDiscount(this.date, this.order));
    addEventToHistory('특별 할인', Discount.specialDiscount(this.date));
    addEventToHistory('증정 이벤트', Discount.presentDiscount(this.getPresent()));

    return benefitsHistory;
  }
}

export default EventCalendar;

/*
const order = [{ menu: '티본스테이크', count: 5 }];
new EventCalendar(2, order).getBenefitsHistory();
new EventCalendar(3, order).getPresent();
*/
