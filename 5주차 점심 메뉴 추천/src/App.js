import Recommend from './domains/Recommend.js';
import RecommendController from './controllers/RecommendController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RecommendController(new Recommend());
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
