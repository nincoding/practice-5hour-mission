import LottoMachine from './domain/LottoMachine.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import LottoMachineController from './controllers/LottoMachineController.js';

class App {
  #domain;
  #views;
  #controller;

  constructor() {
    this.#domain = LottoMachine;
    this.#views = {
      inputView: new InputView(),
      outputView: new OutputView(),
    };
    this.#controller = new LottoMachineController(this.#domain, this.#views);
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
