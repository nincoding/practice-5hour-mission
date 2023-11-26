import BaseballGame from '../domain/BaseballGame.js';
import ComputerNumberGenerator from '../domain/models/ComputerNumberGenerator.js';
import InputValidator from '../domain/validators/InputValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';
import { USER_COMMAND } from '../constants/constants.js';

class BaseballGameController {
  #baseballGame;

  constructor() {
    OutputView.printStartMessage();
  }

  async startGame() {
    const computerNumberGenerator = new ComputerNumberGenerator(randomNumberGenerator);
    this.#baseballGame = new BaseballGame(computerNumberGenerator);
    let isCompleteCondition = this.#baseballGame.getCompleteCondition();

    while (!isCompleteCondition) {
      const userNumber = await InputView.readUserNumber();

      InputValidator.validateUserNumber(userNumber);

      const { ball, strike } = this.#baseballGame.getCompareResult(userNumber);

      OutputView.printCompareResult(ball, strike);

      isCompleteCondition = this.#baseballGame.getCompleteCondition();
    }

    OutputView.printCompleteMessage();

    const userCommand = await InputView.readUserCommand();

    InputValidator.validateUserCommand(userCommand);

    if (userCommand === USER_COMMAND.retry) return this.startGame();
  }
}

export default BaseballGameController;
