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

  #calcTotalOrderAmount() {
    const allMenus = Object.values(MENU).flatMap((category) => {
      return category.map((menu) => ({ [menu.menu]: menu.prize }));
    });

    const totalOrderAmount = this.order.reduce((total, { menu, count }) => {
      return total + allMenus.find(({ [menu]: price }) => price)[menu] * count;
    }, 0);

    return totalOrderAmount;
  }
}

export default EventCalendar;

/*
const order = [{ menu: '티본스테이크', count: 1 }];
new EventCalendar(3, order).calcTotalOrderAmount();
*/
