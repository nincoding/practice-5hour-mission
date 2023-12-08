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

    this.#domain = new EventPlanner(this.#user.getVisitDate(), this.#user.getOrder());

    const result = this.setResultData();

    this.printResult(result);
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

  setResultData() {
    const calcTotalOrderAmount = this.#domain.getTotalOrderAmount();
    const presentCount = this.#domain.getPresent();
    const benefitHistory = this.#domain.getBenefitHistory();
    const totalBenefitAmount = this.#domain.getTotalBenefitAmount(benefitHistory);
    const paymentAmount = this.#domain.getPaymentAmount(benefitHistory);
    const badge = this.#domain.getBadge(totalBenefitAmount);

    return {
      calcTotalOrderAmount,
      presentCount,
      benefitHistory,
      totalBenefitAmount,
      paymentAmount,
      badge,
    };
  }

  printResult(result) {
    OutputView.printTotalOrderAmount(result.calcTotalOrderAmount);
    OutputView.printPresentMenu(result.presentCount);
    OutputView.printBenefitHistory(result.benefitHistory);
    OutputView.printTotalBenefitAmount(result.totalBenefitAmount);
    OutputView.printPaymentAmount(result.paymentAmount);
    OutputView.printBadge(result.badge);
  }
}

export default EventPlannerController;
