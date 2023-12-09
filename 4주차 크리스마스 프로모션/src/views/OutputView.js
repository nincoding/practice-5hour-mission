import { Console } from '@woowacourse/mission-utils';

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
    Console.print(menu);
  },

  printTotalOrderAmount(totalOrderAmount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(totalOrderAmount);
  },

  printPresent(present) {
    Console.print('<증정 메뉴>');
    Console.print(present);
  },

  printBenefitsHistory(benefitsHistory) {
    Console.print('<혜택 내역>');
    Console.print(benefitsHistory);
  },

  printBenefitsAmount(benefitsAmount) {
    Console.print('<총혜택 금액>');
    Console.print(benefitsAmount);
  },

  printEstimatedPaymentAmount(estimatedPaymentAmount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(estimatedPaymentAmount);
  },

  printBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
