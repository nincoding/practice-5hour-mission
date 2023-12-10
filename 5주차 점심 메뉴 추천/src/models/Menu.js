import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constants/constant.js';

class Menu {
  #menu;

  constructor(category) {
    this.#recommendMenu(category);
  }

  getMenu() {
    return this.#menu;
  }

  #recommendMenu(category) {
    const categoryMenus = MENU[category].split(', ');
    const categoryMenusIndex = categoryMenus.map((_, index) => index + 1);
    const menuIndex = Random.shuffle(categoryMenusIndex)[0];

    this.#menu = categoryMenus[menuIndex - 1];
  }
}

export default Menu;
