class CoffeeMachine {
  _waterAmount = 0;
  #privateValue = 10;

  setWaterAmount(value: number) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
    this.#privateValue = value * 10;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  getPrivateValue() {
    return this.#privateValue;
  }
}

new CoffeeMachine().setWaterAmount(100);
