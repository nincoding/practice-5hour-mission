import { MENU, CATEGORY } from '../constants/constant.js';

const Event = {
  present(totalAmount) {
    const desiredMenu = '샴페인';
    const presentItem = MENU[CATEGORY.drink].find((item) => item.menu === desiredMenu);

    return totalAmount >= 120_000 ? { [presentItem.menu]: 1 } : null;
  },

  badge(totalBenefitAmount) {
    if (totalBenefitAmount >= 20_000) return '산타';
    if (totalBenefitAmount >= 10_000) return '트리';
    if (totalBenefitAmount >= 5_000) return '별';
  },
};

export default Event;
