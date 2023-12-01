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
