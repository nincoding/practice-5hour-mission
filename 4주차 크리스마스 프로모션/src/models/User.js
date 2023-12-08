import { splitString } from '../helpers/helper.js';

class User {
  #visitDate;
  #order;

  constructor(date, order) {
    this.#visitDate = date;
    this.#order = this.#parseOrderString(order);
  }

  getVisitDate() {
    return this.#visitDate;
  }

  getOrder() {
    return this.#order;
  }

  #parseOrderString(order) {
    const orderItems = splitString(order);

    return orderItems.map((item) => {
      const [menuName, count] = item.split('-');
      const orderObj = { [menuName]: Number(count) };

      return orderObj;
    });
  }
}

export default User;
