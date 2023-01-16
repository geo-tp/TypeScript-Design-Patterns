import { IPedal } from "./interfaces/IPedal";

export class FordPedal implements IPedal {
  private pressure: number;
  private max: number;

  constructor() {
    this.pressure = 0;
    this.max = 12;
  }

  pressed(pressure: number) {
    this.pressure = Math.min(pressure, this.max);
  }

  released() {
    this.pressure = 0;
  }

  getCurrentValue(): number {
    return this.pressure;
  }
}
