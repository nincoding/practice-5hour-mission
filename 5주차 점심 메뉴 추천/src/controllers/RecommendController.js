import User from '../models/User.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { splitString } from '../helpers/helpers.js';
import { RECOMMEND_DAY, RESULT_PREFIX } from '../constants/constant.js';

class RecommendController {
  #recommend;
  #users = [];

  constructor(recommend) {
    this.#recommend = recommend;
    OutputView.printStart();
  }

  async start() {
    await this.#handleName();
    await this.#handleHateMenus();
    this.#setRecommendMenus();

    const result = this.#setResult();

    this.#printResult(result);
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
    for (const user of this.#users) {
      try {
        const name = user.getUserName();
        const hateMenus = await InputView.readHateMenus(name);
        user.setHateMenus(hateMenus);
      } catch ({ message }) {
        OutputView.printError(message);

        return await this.#handleHateMenus();
      }
    }
  }

  #setRecommendMenus() {
    this.#users.forEach((user) => {
      const hateMenus = user.getHateMenus();
      const recommendMenus = this.#recommend.getRecommendMenus(hateMenus);

      user.setRecommendMenus(recommendMenus);
    });
  }

  #setResult() {
    const result = [
      { [RESULT_PREFIX.differentiate]: RECOMMEND_DAY },
      { [RESULT_PREFIX.category]: this.#recommend.getRecommendCategories() },
      ...this.#users.map((user) => ({
        [user.getUserName()]: user.getRecommendMenus(),
      })),
    ];

    return result;
  }

  #printResult(result) {
    OutputView.printResult(result);
  }
}

export default RecommendController;
