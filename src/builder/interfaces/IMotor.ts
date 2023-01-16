export interface IMotor {
  getIsRunning(): boolean;
  startEngine(): boolean;
  stopEngine(): boolean;
}
