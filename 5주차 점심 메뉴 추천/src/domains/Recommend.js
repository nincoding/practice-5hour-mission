import Category from '../models/Category.js';
import Menu from '../models/Menu.js';

class Recommend {
  #recommendCategories = [];

  constructor() {
    this.#calcRecommendCategories();
  }

  getRecommendCategories() {
    return this.#recommendCategories;
  }

  getRecommendMenus(hateMenus) {
    return this.#calcRecommendMenus(hateMenus);
  }

  #calcRecommendCategories() {
    while (this.#recommendCategories.length < 5) {
      const category = new Category().getCategory();

      if (this.#recommendCategories.filter((item) => item === category).length < 2) {
        this.#recommendCategories.push(category);
      }
    }
  }

  #calcRecommendMenus(hateMenus) {
    const recommendMenus = [];

    for (const category of this.#recommendCategories) {
      let menu;

      do {
        menu = new Menu(category).getMenu();
      } while (hateMenus.includes(menu) && recommendMenus.includes(menu));

      recommendMenus.push(menu);
    }

    return recommendMenus;
  }
}

export default Recommend;
