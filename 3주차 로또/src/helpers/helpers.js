import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONDITION, SYMBOL } from '../constants/constants.js';

/**
 * 주어진 입력이 숫자인지 확인하는 유틸리티 함수
 *
 * @param {string|number} input - 확인할 입력 값
 * @returns {boolean} - 입력이 숫자인 경우 true, 숫자가 아닌 경우 false 반환
 */
export const isNumeric = (input) => {
  const NUMBER_REGEXP = /^\d+$/;

  return NUMBER_REGEXP.test(input) && !Number.isNaN(Number(input));
};

/**
 * 주어진 입력이 정수인지 확인하는 유틸리티 함수
 *
 * @param {string|number} input - 확인할 입력 값
 * @returns {boolean} - 입력이 정수인 경우 true, 정수가 아닌 경우 false 반환
 */
export const isInteger = (input) => {
  return Number.isInteger(Number(input));
};

/**
 * 비동기 작업을 수행하고, 에러가 발생할 경우 지정된 오류 출력 함수를 호출하여 에러 메시지를 처리하는 유틸리티 함수
 *
 * @param {Function} action - 비동기 작업을 수행하는 함수
 * @param {Function} printError - 에러 메시지를 출력하는 함수
 * @returns {Promise} - 작업이 성공하면 resolved된 Promise, 에러가 발생하면 재시도하는 Promise
 */
export const errorHandler = async (action, printError) => {
  while (true) {
    try {
      const result = await action();

      return result;
    } catch ({ message }) {
      printError(message);
    }
  }
};

export const randomNumberGenerator = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO_CONDITION.minRange,
    LOTTO_CONDITION.maxRange,
    LOTTO_CONDITION.lottoLength
  );
};

export const splitInput = (inputs) => {
  return inputs.split(SYMBOL.comma).map((input) => Number(input.trim()));
};
