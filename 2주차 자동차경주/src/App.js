import RacingGame from './domain/RacingGame.js';
import CarNameValidator from './validators/CarNameValidator.js';
import RoundNumberValidator from './validators/RoundNumberValidator.js';
import EmptyInputValidator from './validators/EmptyInputValidator.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import RacingGameController from './controllers/RacingGameController.js';

class App {
  #domain;
  #views;
  #controller;
  #validator;

  constructor() {
    this.#domain = RacingGame;
    this.#views = {
      inputView: new InputView(EmptyInputValidator),
      outputView: new OutputView(),
    };
    this.#validator = {
      CarNameValidator,
      RoundNumberValidator,
    };
    this.#controller = new RacingGameController(this.#domain, this.#views, this.#validator);
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
