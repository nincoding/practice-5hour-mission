import ComputerNumberGenerator from '../src/domain/models/ComputerNumberGenerator.js';

describe('컴퓨터 랜덤 숫자 생성 클래스 테스트', () => {
  let computerNumberGenerator;
  let randomNumberGenerator;
  let expectedGetNumber;

  const setComputerNumberGenerator = () => {
    const testValues = [1, 2, 3];
    randomNumberGenerator = jest.fn(() => testValues.shift());
    computerNumberGenerator = new ComputerNumberGenerator(randomNumberGenerator);
    expectedGetNumber = computerNumberGenerator.getComputerNumber();
  };

  test('랜덤 생성 함수로 세 자리의 수를 반환하는지 테스트한다.', () => {
    const expectedComputerNumber = 123;

    setComputerNumberGenerator();

    expect(expectedGetNumber).toBe(expectedComputerNumber);
  });
});
