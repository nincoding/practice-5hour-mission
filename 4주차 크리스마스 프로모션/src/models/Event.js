import { CALENDAR, CATEGORY, MENU, MENU_PRIZE } from '../constants/constant.js';

class Event {
  getChristmasDiscount(date) {
    return date <= 25 ? this.#calcChristmasDiscount(date) : 0;
  }

  getWeekdayDiscount(date, order) {
    return this.#isWeekEnd(date) ? 0 : this.#calcWeekdayDiscount(order);
  }

  getWeekendDiscount(date, order) {
    return this.#isWeekEnd(date) ? this.#calcWeekendDiscount(order) : 0;
  }

  getSpecialDiscount(date) {
    const specialdays = CALENDAR.special.split(',').map(Number);

    return specialdays.includes(date) ? 1_000 : 0;
  }

  getPresentDiscount(presentCount) {
    return presentCount * MENU_PRIZE.샴페인;
  }

  #calcChristmasDiscount(date) {
    let discount = 1000 + (date - 1) * 100;

    return discount;
  }

  #isWeekEnd(date) {
    const weekend = CALENDAR.weekend.split(',').map(Number);

    return weekend.includes(date);
  }

  #calcWeekdayDiscount(order) {
    const dessertMenu = MENU[CATEGORY.dessert].split(',');

    const dessertOrders = order.filter((orderObj) => {
      const menuName = Object.keys(orderObj)[0];
      return dessertMenu.includes(menuName);
    });

    const totalOrderCount = dessertOrders.reduce((total, orderObj) => {
      const menuCount = orderObj[Object.keys(orderObj)[0]];
      return total + menuCount;
    }, 0);

    return totalOrderCount * 2_023;
  }

  #calcWeekendDiscount(order) {
    const mainMenu = MENU[CATEGORY.main].split(',');

    const mainOrders = order.filter((orderObj) => {
      const menuName = Object.keys(orderObj)[0];
      return mainMenu.includes(menuName);
    });

    const totalOrderCount = mainOrders.reduce((total, orderObj) => {
      const menuCount = orderObj[Object.keys(orderObj)[0]];
      return total + menuCount;
    }, 0);

    return totalOrderCount * 2_023;
  }
}

export default Event;
