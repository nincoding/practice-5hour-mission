import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventCalendarController {
  constructor() {
    OutputView.printStart();
  }

  async start() {
    const date = await this.#handleDate();
    const order = await this.#handleOrder();
  }

  async #handleDate() {
    try {
      const date = await InputView.readDate();

      return date;
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.#handleDate();
    }
  }

  async #handleOrder() {
    try {
      const order = await InputView.readOrder();

      return order;
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.#handleOrder();
    }
  }

  #printResult() {}
}

export default EventCalendarController;
