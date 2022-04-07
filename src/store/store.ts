import { makeAutoObservable } from "mobx";

export default class Store {
  steps = 5;
  step = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setStep(step: number) {
    this.step = step;
  }
  incStep() {
    if (this.step < this.steps) {
      this.step = this.step + 1;
    }
  }
  decStep() {
    if (this.step > 0) {
      this.step = this.step + 1;
    }
  }

  get arrOfSteps() {
    return Array.from({ length: this.steps }, (v, k) => k);
  }
}
