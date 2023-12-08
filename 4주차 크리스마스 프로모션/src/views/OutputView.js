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
    Console.print('<주문 메뉴>');

    order.forEach((item) => {
      const menuName = Object.keys(item)[0];
      const menuCount = item[menuName];
      Console.print(`${menuName} ${menuCount}개`);
    });
  },

  printTotalOrderAmount(amount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${addCommasToAmount(amount)}원`);
  },

  printPresentMenu(count) {
    Console.print('<증정 메뉴>');
    Console.print(`샴페인 ${count}개`);
  },

  printBenefitHistory(benefitHistory) {
    Console.print('<혜택 내역>');

    benefitHistory.forEach((item) => {
      const benefitName = Object.keys(item)[0];
      const amount = item[benefitName];

      Console.print(`${benefitName}: -${addCommasToAmount(amount)}원`);
    });
  },

  printTotalBenefitAmount(amount) {
    Console.print('<총혜택 금액>');
    Console.print(`-${addCommasToAmount(amount)}원`);
  },

  printPaymentAmount(amount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${addCommasToAmount(amount)}원`);
  },

  printBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
