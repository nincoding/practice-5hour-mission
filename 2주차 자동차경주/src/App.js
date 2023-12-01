import RacingGame from './domain/RacingGame.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import RacingGameController from './controllers/RacingGameController.js';

class App {
  #domain;
  #views;
  #controller;

  constructor() {
    this.#domain = new RacingGame();
    this.#views = {
      inputView: new InputView(),
      outputView: new OutputView(),
    };
    this.#controller = new RacingGameController(this.#domain, this.#views);
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
