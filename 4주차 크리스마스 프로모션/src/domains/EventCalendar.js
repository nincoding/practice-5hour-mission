import Discount from '../models/Discount.js';
import Event from '../models/Event.js';
import User from '../models/User.js';
import { CATEGORY, MENU } from '../constants/constant.js';

class EventCalendar {
  #date;
  #order;
  #totalOrderAmount;
  #benefitsHistory;

  constructor(date, order) {
    this.#init(date, order);
  }

  getTotalOrderAmount() {
    return this.#calcTotalOrderAmount();
  }

  getBenefitsHistory() {
    const isEventCondition = this.#totalOrderAmount >= 10_000;
    const benefitsHistory = isEventCondition ? this.#calcBenefitsHistory() : null;

    return benefitsHistory;
  }

  getPresent() {
    return Event.present(this.#totalOrderAmount);
  }

  getBenefitsAmount() {
    return this.#benefitsHistory !== null ? this.#calcBenefitsAmount() : 0;
  }

  getEstimatedPaymentAmount() {
    return (
      this.#totalOrderAmount -
      this.getBenefitsAmount() +
      Discount.presentDiscount(this.getPresent())
    );
  }

  getBadge() {
    const isEventCondition = this.#totalOrderAmount >= 10_000;
    const badge = isEventCondition ? Event.badge(this.getBenefitsAmount()) : '없음';

    return badge;
  }

  #init(date, order) {
    const user = new User(date, order);
    this.#date = user.getDate();
    this.#order = user.getOrder();
    this.#totalOrderAmount = this.#calcTotalOrderAmount();
    this.#benefitsHistory = this.getBenefitsHistory();
  }

  #calcTotalOrderAmount() {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => ({ [menu.menu]: menu.prize }));
    });

    const totalOrderAmount = this.#order.reduce((total, { menu, count }) => {
      return total + allMenus.find(({ [menu]: price }) => price)[menu] * count;
    }, 0);

    return totalOrderAmount;
  }

  #calcBenefitsHistory() {
    const benefitsHistory = [];
    const addEventToHistory = (eventName, discountAmount) => {
      if (discountAmount !== 0) {
        benefitsHistory.push({ [eventName]: discountAmount });
      }
    };

    addEventToHistory('크리스마스 디데이 할인', Discount.christmasDayDiscount(this.#date));
    addEventToHistory('평일 할인', Discount.weekdayDiscount(this.#date, this.#order));
    addEventToHistory('주말 할인', Discount.weekendDiscount(this.#date, this.#order));
    addEventToHistory('특별 할인', Discount.specialDiscount(this.#date));
    addEventToHistory('증정 이벤트', Discount.presentDiscount(this.getPresent()));

    return benefitsHistory;
  }

  #calcBenefitsAmount() {
    const totalBenefitsAmount = this.#benefitsHistory.reduce((total, entry) => {
      const value = Object.values(entry)[0];
      return total + value;
    }, 0);

    return totalBenefitsAmount;
  }
}

export default EventCalendar;
