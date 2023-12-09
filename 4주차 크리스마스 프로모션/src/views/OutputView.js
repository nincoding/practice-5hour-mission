import { Console } from '@woowacourse/mission-utils';
import { addCommasToAmount } from '../helpers/helper.js';

const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printError(message) {
    Console.print(message);
  },

  printPreview(date) {
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  printMenu(menu) {
    Console.print('<주문 메뉴>');

    const formattedMenu = menu.split(',').map((item) => {
      const [itemName, count] = item.split('-');
      return { menu: itemName.trim(), count: Number(count) };
    });

    formattedMenu.forEach(({ menu: itemName, count }) => {
      Console.print(`${itemName} ${count}개`);
    });
  },

  printTotalOrderAmount(totalOrderAmount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${addCommasToAmount(totalOrderAmount)}원`);
  },

  printPresent(present) {
    Console.print('<증정 메뉴>');
    if (present === null) {
      return Console.print('없음');
    }
    const presentItem = Object.keys(present)[0];
    const presentCount = Object.values(present)[0];
    Console.print(`${presentItem} ${presentCount}개`);
  },

  printBenefitsHistory(benefitsHistory) {
    Console.print('<혜택 내역>');
    if (benefitsHistory === null) {
      return Console.print('없음');
    }

    benefitsHistory.forEach((entry) => {
      const [eventName, amount] = Object.entries(entry)[0];
      const formattedAmount = addCommasToAmount(amount);
      Console.print(`${eventName}: -${formattedAmount}원`);
    });
  },

  printBenefitsAmount(benefitsAmount) {
    Console.print('<총혜택 금액>');
    if (benefitsAmount === 0) {
      return Console.print(`${addCommasToAmount(benefitsAmount)}원`);
    }
    Console.print(`-${addCommasToAmount(benefitsAmount)}원`);
  },

  printEstimatedPaymentAmount(estimatedPaymentAmount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${addCommasToAmount(estimatedPaymentAmount)}원`);
  },

  printBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
