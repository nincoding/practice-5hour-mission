import BaseballGameController from './controller/BaseballGameController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseballGameController();
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
