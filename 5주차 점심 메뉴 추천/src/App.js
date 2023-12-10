import RecommendController from './controllers/RecommendController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RecommendController();
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
