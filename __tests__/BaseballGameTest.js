import BaseballGame from '../src/domain/BaseballGame.js';

describe('숫자 야구 게임 클래스 테스트', () => {
  let computerNumberGenerator;
  let baseballGame;
  let expectedGetCompareResult;
  let expectedGetCompleteCondition;

  const setComputerNumberGenerator = (userNumber) => {
    const testComputerNumber = 123;
    const testUserNumber = userNumber;

    computerNumberGenerator = {
      getComputerNumber() {
        return testComputerNumber;
      },
    };
    baseballGame = new BaseballGame(computerNumberGenerator);
    expectedGetCompareResult = baseballGame.getCompareResult(testUserNumber);
    expectedGetCompleteCondition = baseballGame.getCompleteCondition();
  };

  const expectedTestResult = [
    [{ ball: 0, strike: 3 }, 123],
    [{ ball: 3, strike: 0 }, 312],
    [{ ball: 1, strike: 1 }, 134],
    [{ ball: 0, strike: 0 }, 456],
  ];

  test.each(expectedTestResult)(
    '컴퓨터와 사용자의 숫자 비교가 정확한지 테스트한다.',
    (expectedResult, testUserNumber) => {
      setComputerNumberGenerator(testUserNumber);

      const actualResult = baseballGame.getCompareResult(testUserNumber);

      expect(actualResult).toEqual(expectedResult);
    }
  );

  test('3스트라이크일때 게임 종료 조건이 true가 되는지 테스트한다.', () => {
    const testUserNumber = 123;
    setComputerNumberGenerator(testUserNumber);

    expect(expectedGetCompleteCondition).toBe(true);
  });

  test('3스트라이크 아닐때 게임 종료 조건이 false가 되는지 테스트한다.', () => {
    const testUserNumber = 456;
    setComputerNumberGenerator(testUserNumber);

    expect(expectedGetCompleteCondition).toBe(false);
  });
});
