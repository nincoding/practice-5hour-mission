import Car from '../src/models/Car.js';

describe('Car 클래스 테스트', () => {
  let car;
  let testName;
  let validator;

  beforeEach(() => {
    testName = '자동차';
    validator = {
      validateCarName(carName) {
        if (!(carName.length >= 1 && carName.length <= 5)) throw new Error('[ERROR]');
      },
    };
    car = new Car(testName, validator);
  });

  const invalidTestNames = ['', '123456'];

  test.each(invalidTestNames)(
    '유효하지 않은 자동차 이름일 경우 에러를 반환하는지 테스트',
    (invalidName) => {
      expect(() => {
        new Car(invalidName, validator);
      }).toThrowError('[ERROR]');
    }
  );

  test('move 메소드 호출 후 전진값이 증가하는지 테스트', () => {
    const expectedCarName = car.getCarName();

    expect(expectedCarName).toBe(testName);
  });

  test('move 메소드 호출 후 전진값이 증가하는지 테스트', () => {
    const initialProgress = car.getProgress();

    expect(initialProgress).toBe(0);

    car.move();

    const updatedProgress = car.getProgress();

    expect(updatedProgress).toBe(1);
  });
});
