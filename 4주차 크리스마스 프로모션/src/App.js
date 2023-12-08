import EventPlannerController from './controllers/EventPlannerController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new EventPlannerController();
  }

  async run() {
    await this.#controller.start();
  }
}

export default App;
