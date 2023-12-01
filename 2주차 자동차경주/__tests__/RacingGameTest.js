import RacingGame from '../src/domain/RacingGame.js';

describe('RacingGame 클래스 테스트', () => {
  let racingGame;
  let carNames;
  let round;
  let validatorMock;
  let mockRandomNumberGenerator;

  beforeEach(() => {
    carNames = ['Car1', 'Car2', 'Car3'];
    round = 2;

    validatorMock = {
      CarNameValidator: {
        validateCarNames: jest.fn(),
      },
      RoundNumberValidator: {
        validateRoundNumber: jest.fn(),
      },
    };
    const desiredValues = [1, 3, 4, 2, 6, 5];
    mockRandomNumberGenerator = jest.fn(() => desiredValues.shift());

    racingGame = new RacingGame(carNames, round, validatorMock, CarMock);
  });

  test('racing 메소드가 정상적으로 동작하는지 테스트', () => {
    racingGame.racing(mockRandomNumberGenerator);

    const progressValues = racingGame.getRoundResult().map((result) => result.countProgress);

    expect(progressValues.every((value) => value === 0 || value === 1)).toBeTruthy();
  });

  test('getWinners 메소드가 정상적으로 동작하는지 테스트', () => {
    racingGame.racing(mockRandomNumberGenerator);

    const winners = racingGame.getWinners();

    expect(winners).toEqual(['Car3']);
  });

  test('getRoundResult 메소드가 정상적으로 동작하는지 테스트', () => {
    const expectedResult = [
      { carName: 'Car1', countProgress: 0 },
      { carName: 'Car2', countProgress: 0 },
      { carName: 'Car3', countProgress: 1 },
    ];

    for (let i = 1; i < round; i++) {
      racingGame.racing(mockRandomNumberGenerator);
    }

    const roundResult = racingGame.getRoundResult();

    expect(roundResult).toEqual(expectedResult);
  });

  test('isFinish 메소드가 정상적으로 동작하는지 테스트', () => {
    for (let i = 0; i < round; i++) {
      racingGame.racing(mockRandomNumberGenerator);
    }

    expect(racingGame.isFinish()).toBeTruthy();
  });
});

class CarMock {
  #name;
  #progress;

  constructor(name) {
    this.#name = name;
    this.#progress = 0;
  }

  getCarName() {
    return this.#name;
  }

  getProgress() {
    return this.#progress;
  }

  move() {
    this.#progress += 1;
  }
}
