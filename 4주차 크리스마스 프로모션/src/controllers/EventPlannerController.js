import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

class EventPlannerController {
  constructor() {
    OutputView.printStart();
  }

  async start() {
    const date = await this.handleVisitDate();
    const order = await this.handleOrder();
  }

  async handleVisitDate() {
    try {
      const visitDate = await InputView.readDate();

      return Number(visitDate);
    } catch ({ message }) {
      OutputView.printError(message);

      await this.handleVisitDate();
    }
  }

  async handleOrder() {
    try {
      const order = await InputView.readOrder();

      return order;
    } catch ({ message }) {
      OutputView.printError(message);

      await this.handleOrder();
    }
  }
}

export default EventPlannerController;
