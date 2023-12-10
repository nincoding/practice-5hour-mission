import User from '../models/User.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { splitString } from '../helpers/helpers.js';

class RecommendController {
  #userNames;
  #user;

  constructor() {
    OutputView.printStart();
  }

  async start() {
    this.#userNames = await this.#handleName();

    console.log(this.#userNames);
  }

  async #handleName() {
    try {
      const names = await InputView.readCoachNames();
      const name = splitString(names);

      this.#user = new User(name);

      return names;
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.#handleName();
    }
  }
}

export default RecommendController;
