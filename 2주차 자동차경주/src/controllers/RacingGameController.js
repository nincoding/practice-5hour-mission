import Car from '../models/Car.js';
import { splitInput, randomNumberGenerator } from '../helpers/helpers.js';
import { DECIMAL } from '../constants/constants.js';

class RacingGameController {
  #domain;
  #inputView;
  #outputView;
  #validator;

  constructor(domain, views, validator) {
    this.#domain = domain;
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
    this.#validator = validator;
  }

  async start() {
    await this.#initializeGame();

    this.#outputView.printResultMessage();

    this.#playRacingGame();
    this.#finishGame();
  }

  async #initializeGame() {
    const inputCarNames = await this.#inputView.readCarNames();
    const carNames = splitInput(inputCarNames);

    const inputRoundNumber = await this.#inputView.readRoundNumber();
    const roundNumber = parseInt(inputRoundNumber, DECIMAL);

    this.#domain = new this.#domain(carNames, roundNumber, this.#validator, Car);
  }

  #playRacingGame() {
    while (!this.#domain.isFinish()) {
      this.#domain.racing(randomNumberGenerator);

      const currentResult = this.#domain.getRoundResult();

      this.#outputView.printRoundResult(currentResult);
    }
  }

  #finishGame() {
    const winnerResult = this.#domain.getWinners();

    this.#outputView.printWinners(winnerResult);
  }
}

export default RacingGameController;
