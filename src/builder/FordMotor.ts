import { IMotor } from "./interfaces/IMotor";

export class FordMotor implements IMotor {
  private isRunning: boolean = false;

  getIsRunning(): boolean {
    return this.isRunning;
  }

  startEngine(): boolean {
    this.isRunning = true;

    return true;
  }
  stopEngine(): boolean {
    this.isRunning = false;

    return false;
  }
}
