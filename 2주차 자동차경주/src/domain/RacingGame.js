import { RACING_CONDITION } from '../constants/constants.js';

class RacingGame {
  #cars;
  #round;

  constructor(carNames, round, validator, car) {
    validator.CarNameValidator.validateCarNames(carNames);
    validator.RoundNumberValidator.validateRoundNumber(round);

    this.#cars = carNames.map((carName) => new car(carName, validator.CarNameValidator));
    this.#round = round;
  }

  racing(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= RACING_CONDITION.minPassNumber) car.move();
    });

    this.#round -= RACING_CONDITION.oneStep;
  }

  getRoundResult() {
    const roundResult = this.#cars.map((car) => {
      const carName = car.getCarName();
      const countProgress = car.getProgress();

      return { carName, countProgress };
    });

    return roundResult;
  }

  getWinners() {
    const highScore = Math.max(...this.#cars.map((car) => car.getProgress()));
    const winnerCars = this.#cars.filter((car) => car.getProgress() === highScore);
    const winnerNames = winnerCars.map((car) => car.getCarName());

    return winnerNames;
  }

  isFinish() {
    return this.#round === RACING_CONDITION.endRound;
  }
}

export default RacingGame;
