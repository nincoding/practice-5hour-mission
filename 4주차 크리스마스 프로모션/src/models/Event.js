class Event {
  constructor() {}

  christmasDiscountEvent(date) {
    return date <= 25 ? this.#calcChristmasDiscount(date) : 0;
  }

  #calcChristmasDiscount(date) {
    let discount = 1000 + (date - 1) * 100;

    return discount;
  }
}

export default Event;
