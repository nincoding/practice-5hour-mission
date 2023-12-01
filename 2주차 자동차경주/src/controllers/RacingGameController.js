import Car from '../models/Car.js';
import CarNameValidator from '../validators/CarNameValidator.js';
import RoundNumberValidator from '../validators/RoundNumberValidator.js';
import { splitInput, randomNumberGenerator } from '../helpers/helpers.js';
import { DECIMAL } from '../constants/constants.js';

class RacingGameController {
  #domain;
  #inputView;
  #outputView;
  #validator;

  constructor(domain, views) {
    this.#domain = domain;
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
    this.#validator = {
      CarNameValidator,
      RoundNumberValidator,
    };
  }

  async start() {
    const inputCarNames = await this.#inputView.readCarNames();
    const splitCarNames = splitInput(inputCarNames);
    const inputRoundNumber = await this.#inputView.readRoundNumber();
    const roundNumber = parseInt(inputRoundNumber, DECIMAL);

    this.#domain = new this.#domain(splitCarNames, roundNumber, this.#validator, Car);
    this.#outputView.printResultMessage();

    while (!this.#domain.isFinish()) {
      this.#domain.racing(randomNumberGenerator);
      const currentResult = this.#domain.getRoundResult();

      this.#outputView.printRoundResult(currentResult);
    }

    const winnerResult = this.#domain.getWinners();

    this.#outputView.printWinners(winnerResult);
  }
}

export default RacingGameController;
