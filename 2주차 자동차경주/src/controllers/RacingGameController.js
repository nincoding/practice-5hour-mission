class RacingGameController {
  #domain;
  #inputView;
  #outputView;

  constructor(domain, views) {
    this.#domain = domain;
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
  }

  async start() {
    const carNames = await this.#inputView.readCarNames();
  }
}

export default RacingGameController;
