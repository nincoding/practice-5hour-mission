import EventCalendar from '../domains/EventCalendar.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventCalendarController {
  #eventCalendar;

  constructor() {
    OutputView.printStart();
  }

  async start() {
    const date = await this.#handleDate();
    const order = await this.#handleOrder();
    OutputView.printPreview(date);
    OutputView.printMenu(order);

    this.#eventCalendar = new EventCalendar(date, order);
    const result = this.#setResultData();
    this.#printResult(result);
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

  #setResultData() {
    const totalOrderAmount = this.#eventCalendar.getTotalOrderAmount();
    const present = this.#eventCalendar.getPresent();
    const benefitsHistory = this.#eventCalendar.getBenefitsHistory();
    const benefitsAmount = this.#eventCalendar.getBenefitsAmount();
    const estimatedPaymentAmount = this.#eventCalendar.getEstimatedPaymentAmount();
    const badge = this.#eventCalendar.getBadge();

    return {
      totalOrderAmount,
      present,
      benefitsHistory,
      benefitsAmount,
      estimatedPaymentAmount,
      badge,
    };
  }

  #printResult(result) {
    OutputView.printTotalOrderAmount(result.totalOrderAmount);
    OutputView.printPresent(result.present);
    OutputView.printBenefitsHistory(result.benefitsHistory);
    OutputView.printBenefitsAmount(result.benefitsAmount);
    OutputView.printEstimatedPaymentAmount(result.estimatedPaymentAmount);
    OutputView.printBadge(result.badge);
  }
}

export default EventCalendarController;
