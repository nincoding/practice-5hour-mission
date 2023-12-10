import User from '../models/User.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { splitString } from '../helpers/helpers.js';

class RecommendController {
  #users = [];

  constructor() {
    OutputView.printStart();
  }

  async start() {
    await this.#handleName();

    const hateMenusByUser = await this.#handleHateMenus();
  }

  async #handleName() {
    try {
      const names = await InputView.readCoachNames();
      const nameArray = splitString(names);

      this.#users = nameArray.map((name) => new User(name));

      return names;
    } catch ({ message }) {
      OutputView.printError(message);

      return await this.#handleName();
    }
  }

  async #handleHateMenus() {
    const hateMenusByUser = [];

    for (const user of this.#users) {
      try {
        const name = user.getUserName();
        const hateMenus = await InputView.readHateMenus(name);
        user.setHateMenus(hateMenus);

        hateMenusByUser.push({ name, hateMenus });
      } catch ({ message }) {
        OutputView.printError(message);
      }
    }

    return hateMenusByUser;
  }
}

export default RecommendController;
