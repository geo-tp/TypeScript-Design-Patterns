import { IPedal } from "../interfaces/IPedal";

export class FordGasPedal implements IPedal {
  private pressure: number;
  private max: number;

  constructor() {
    this.pressure = 0;
    this.max = 16;
  }

  private pressed(pressure: number) {
    this.pressure = Math.min(pressure, this.max);
  }

  private released() {
    this.pressure = 0;
  }

  getCurrentPressure(): number {
    return this.pressure;
  }
}
