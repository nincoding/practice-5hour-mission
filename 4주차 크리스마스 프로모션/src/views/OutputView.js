import { Console } from '@woowacourse/mission-utils';

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

  // TODO: 메뉴이름 개수 으로 포맷필요
  printMenu(menu) {
    Console.print('<주문 메뉴>');
    Console.print(menu);
  },

  // TODO: 금액 한화기준으로 , 포맷필요
  printTotalOrderAmount(amount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${amount}원`);
  },

  printPresentMenu(count) {
    Console.print('<증정 메뉴>');
    Console.print(`샴페인 ${count}개`);
  },

  // TODO: 혜택 이벤트명 : -할인금액 으로 포맷필요
  printBenefitHistory(benefitHistory) {
    Console.print('<혜택 내역>');
    Console.print(benefitHistory);
  },

  // TODO: 금액 한화기준으로 , 포맷필요
  printTotalBenefitAmount(amount) {
    Console.print('<총혜택 금액>');
    Console.print(`-${amount}원`);
  },

  // TODO: 금액 한화기준으로 , 포맷필요
  printPaymentAmount(amount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${amount}원`);
  },

  printBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
