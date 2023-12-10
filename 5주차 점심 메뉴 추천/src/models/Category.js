import { Random } from '@woowacourse/mission-utils';
import { MENU, CONDITION } from '../constants/constant.js';

class Category {
  #category;

  constructor() {
    this.#recommendCategroy();
  }

  getCategory() {
    return this.#category;
  }

  #recommendCategroy() {
    const categories = Object.keys(MENU);
    const categoryIndex = Random.pickNumberInRange(
      CONDITION.categoryMinRange,
      CONDITION.categoryMaxRange
    );

    this.#category = categories[categoryIndex - 1];
  }
}

export default Category;
