import { Console } from '@woowacourse/mission-utils';
import { addCommasToAmount } from '../helpers/helper.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printPreview(date) {
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  printMenu(order) {
    Console.print('\n<주문 메뉴>');

    order.forEach((item) => {
      const menuName = Object.keys(item)[0];
      const menuCount = item[menuName];
      Console.print(`${menuName} ${menuCount}개`);
    });
  },

  printTotalOrderAmount(amount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${addCommasToAmount(amount)}원`);
  },

  printPresentMenu(count) {
    Console.print('\n<증정 메뉴>');

    if (count === 0) {
      return Console.print('없음');
    }

    Console.print(`샴페인 ${count}개`);
  },

  printBenefitHistory(benefitHistory) {
    Console.print('\n<혜택 내역>');

    if (benefitHistory.length === 0) {
      return Console.print('없음');
    }

    benefitHistory.forEach((item) => {
      const benefitName = Object.keys(item)[0];
      const amount = item[benefitName];

      Console.print(`${benefitName}: -${addCommasToAmount(amount)}원`);
    });
  },

  printTotalBenefitAmount(amount) {
    Console.print('\n<총혜택 금액>');

    const formattedAmount = addCommasToAmount(amount);
    const message = amount === 0 ? `${formattedAmount}원` : `-${formattedAmount}원`;

    Console.print(message);
  },

  printPaymentAmount(amount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${addCommasToAmount(amount)}원`);
  },

  printBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
