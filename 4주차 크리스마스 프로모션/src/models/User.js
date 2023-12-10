class User {
  #date;
  #order;

  constructor(date, order) {
    this.#date = Number(date);
    this.#order = this.#formatOrder(order);
  }

  getDate() {
    return this.#date;
  }

  getOrder() {
    return this.#order;
  }

  #formatOrder(order) {
    const items = order.split(',');

    const formattedOrder = items.map((item) => {
      const [menu, countString] = item.split('-');
      const count = Number(countString);

      return { menu: menu.trim(), count };
    });

    return formattedOrder;
  }
}

export default User;
