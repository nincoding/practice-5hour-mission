import EventPlanner from '../domains/EventPlanner.js';
import User from '../models/User.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

class EventPlannerController {
  #domain;
  #user;

  constructor() {
    OutputView.printStart();
  }

  async start() {
    const date = await this.handleVisitDate();
    const order = await this.handleOrder();

    this.#user = new User(date, order);

    OutputView.printPreview(this.#user.getVisitDate());
    OutputView.printMenu(this.#user.getOrder());
  }

  async handleVisitDate() {
    try {
      const visitDate = await InputView.readDate();

      return Number(visitDate);
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.handleVisitDate();
    }
  }

  async handleOrder() {
    try {
      const order = await InputView.readOrder();

      return order;
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.handleOrder();
    }
  }
}

export default EventPlannerController;
