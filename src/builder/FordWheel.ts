import { IWheel } from "./interfaces/IWheel";

export class FordWheel implements IWheel {
  private xAxis: number = 0;
  private maxRight: number = 100;
  private maxLeft: number = -100;

  turnLeft() {
    this.xAxis = this.maxLeft;
  }

  turnRight() {
    this.xAxis = this.maxRight;
  }

  reset() {
    this.xAxis = 0;
  }

  getDirectionValue(): number {
    return this.xAxis;
  }
}
