import Category from '../models/Category.js';
import Menu from '../models/Menu.js';

class Recommend {
  #recommendCategories = [];

  constructor(hateMenusByUser) {
    console.log(hateMenusByUser);
    this.#calcRecommendCategories();
  }

  getRecommendCategories() {
    return this.#recommendCategories;
  }

  #calcRecommendCategories() {
    while (this.#recommendCategories.length < 5) {
      const category = new Category().getCategory();

      if (this.#recommendCategories.filter((item) => item === category).length < 2) {
        this.#recommendCategories.push(category);
      }
    }
  }
}

export default Recommend;

const re = new Recommend();
console.log(re.getRecommendCategories());
