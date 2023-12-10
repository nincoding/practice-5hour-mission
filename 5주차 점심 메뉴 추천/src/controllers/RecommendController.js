import Recommend from '../domains/Recommend.js';
import User from '../models/User.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { splitString } from '../helpers/helpers.js';
import { RECOMMEND_DAY } from '../constants/constant.js';

class RecommendController {
  #recommend;
  #users = [];

  constructor() {
    OutputView.printStart();
  }

  async start() {
    await this.#handleName();
    await this.#handleHateMenus();

    this.#recommend = new Recommend();

    for (const user of this.#users) {
      const hateMenus = user.getHateMenus();
      const recommendMenus = this.#recommend.getRecommendMenus(hateMenus);

      user.setRecommendMenus(recommendMenus);
    }

    const result = [
      { 구분: RECOMMEND_DAY },
      { 카테고리: this.#recommend.getRecommendCategories() },
      ...this.#users.map((user) => ({
        [user.getUserName()]: user.getRecommendMenus(),
      })),
    ];

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
    const hateMenusByUser = [];

    for (const user of this.#users) {
      try {
        const name = user.getUserName();
        const hateMenus = await InputView.readHateMenus(name);
        user.setHateMenus(hateMenus);

        hateMenusByUser.push({ name, hateMenus });
      } catch ({ message }) {
        OutputView.printError(message);

        return await this.#handleHateMenus();
      }
    }

    return hateMenusByUser;
  }

  #printResult(result) {
    OutputView.printResult(result);
  }
}

export default RecommendController;
