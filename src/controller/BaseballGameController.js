import BaseballGame from '../domain/BaseballGame.js';
import InputValidator from '../domain/validators/InputValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { USER_COMMAND } from '../constants/constants.js';

class BaseballGameController {
  #baseballGame;
  #isCompleteCondition;

  constructor() {
    OutputView.printStartMessage();
  }

  async startGame() {
    this.#baseballGame = new BaseballGame();
    this.#isCompleteCondition = this.#baseballGame.getCompleteCondition();

    while (!this.#isCompleteCondition) {
      const userNumber = await InputView.readUserNumber();

      InputValidator.validateUserNumber(userNumber);

      const { ball, strike } = this.#baseballGame.getCompareResult(userNumber);

      OutputView.printCompareResult(ball, strike);

      this.#isCompleteCondition = this.#baseballGame.getCompleteCondition();
    }

    OutputView.printCompleteMessage();

    const userCommand = await InputView.readUserCommand();

    InputValidator.validateUserCommand(userCommand);

    if (userCommand === USER_COMMAND.retry) return this.startGame();
  }
}

export default BaseballGameController;
