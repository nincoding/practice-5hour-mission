import EventCalendarController from './controllers/EventCalendarController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new EventCalendarController();
  }

  async run() {
    await this.#controller.start();
  }
}

export default App;
