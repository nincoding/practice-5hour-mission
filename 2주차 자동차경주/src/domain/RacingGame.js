import CarNameValidator from '../validators/CarNameValidator.js';
import RoundNumberValidator from '../validators/RoundNumberValidator.js';
import Car from '../models/Car.js';
import { RACING_CONDITION } from '../constants/constants.js';

class RacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    CarNameValidator.validateCarNames(carNames);
    RoundNumberValidator.validateRoundNumber(round);

    this.#cars = carNames.map((carName) => new Car(carName));
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
