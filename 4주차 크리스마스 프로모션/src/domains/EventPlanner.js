import Event from '../models/Event.js';
import { MENU_PRIZE } from '../constants/constant.js';

class EventPlanner {
  constructor(date, order) {
    this.date = date;
    this.order = order;
    this.totalOrderAmount = this.#calcTotalOrderAmount();
    this.event = new Event();
  }

  getTotalOrderAmount() {
    return this.totalOrderAmount;
  }

  getPresent() {
    return this.#isEvent() && this.totalOrderAmount >= 120_000 ? 1 : 0;
  }

  getBenefitHistory() {
    return this.#isEvent() ? this.#calcBenefitHistory() : [];
  }

  getTotalBenefitAmount(benefitHistory) {
    const totalDiscount = benefitHistory.reduce((acc, item) => {
      const benefitName = Object.keys(item)[0];
      const amount = item[benefitName];

      return acc + amount;
    }, 0);

    return totalDiscount;
  }

  getPaymentAmount(benefitHistory) {
    const totalDiscount = benefitHistory.reduce((acc, item) => {
      const benefitName = Object.keys(item)[0];
      const amount = item[benefitName];

      if (benefitName !== '증정 이벤트') {
        return acc + amount;
      }

      return acc;
    }, 0);

    return this.totalOrderAmount - totalDiscount;
  }

  getBadge(totalBenefitAmount) {
    return this.#isEvent() ? this.#calcBadge(totalBenefitAmount) : '없음';
  }

  #isEvent() {
    return this.totalOrderAmount >= 10_000;
  }

  #calcTotalOrderAmount() {
    const totalOrderPrice = this.order.reduce((total, orderItem) => {
      const menuName = Object.keys(orderItem)[0];
      const count = orderItem[menuName];
      const menuPrice = MENU_PRIZE[menuName];

      return total + menuPrice * count;
    }, 0);

    return totalOrderPrice;
  }

  #calcBenefitHistory() {
    const benefitHistory = [];

    const addBenefit = (eventName, amount) => {
      if (amount > 0) {
        benefitHistory.push({ [eventName]: amount });
      }
    };

    addBenefit('크리스마스 디데이 할인', this.event.getChristmasDiscount(this.date));
    addBenefit('평일 할인', this.event.getWeekdayDiscount(this.date, this.order));
    addBenefit('주말 할인', this.event.getWeekendDiscount(this.date, this.order));
    addBenefit('특별 할인', this.event.getSpecialDiscount(this.date));
    addBenefit('증정 이벤트', this.event.getPresentDiscount(this.getPresent()));

    return benefitHistory;
  }

  #calcBadge(totalBenefitAmount) {
    if (totalBenefitAmount >= 20_000) {
      return '산타';
    }

    if (totalBenefitAmount >= 10_000) {
      return '트리';
    }

    if (totalBenefitAmount >= 5_000) {
      return '별';
    }
  }
}

export default EventPlanner;

/*
const date = 2;
const order = [{ 아이스크림: 2 }];
const event = new EventPlanner(date, order);
console.log(event.getBenefitHistory());
*/
