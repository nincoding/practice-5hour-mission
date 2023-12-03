class LottoMachineController {
  #domain;
  #inputView;
  #outputView;

  constructor(domain, view) {
    this.#domain = domain;
    this.#inputView = view.inputView;
    this.#outputView = view.outputView;
  }

  async start() {}
}

export default LottoMachineController;
