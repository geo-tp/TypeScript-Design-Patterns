import { IPedal } from "./interfaces/IPedal";
import { IBrake } from "./interfaces/IBrake";
import { IWheel } from "./interfaces/IWheel";
import { IMotor } from "./interfaces/IMotor";
import { Car } from "./Car";

export class CarBuilder {
  private car: Car;

  constructor() {
    this.reset();
  }

  setCarBrandInformations(
    id: number,
    name: string,
    model: string,
    birthdate: string,
    power: number
  ) {
    this.car.setInformation(id, name, model, birthdate, power);
  }

  setCarMotor(motor: IMotor) {
    this.car.setMotor(motor);
  }

  setCarBrake(brake: IBrake) {
    this.car.setBrake(brake);
  }

  setCarWheel(wheel: IWheel) {
    this.car.setWHeel(wheel);
  }

  setCarPedal(pedal: IPedal) {
    this.car.setPedal(pedal);
  }

  reset() {
    this.car = new Car();
  }

  getProduct(): Car {
    const product = this.car;
    this.reset();

    return product;
  }
}
