import { IBrake } from "./interfaces/IBrake";

export class FordBrake implements IBrake {
  brake(): void {
    throw new Error("Method not implemented.");
  }
}
