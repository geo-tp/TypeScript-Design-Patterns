import { IPedal } from "./interfaces/IPedal";
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
    birthdate: string
  ) {
    this.car.setInformation(id, name, model, birthdate);
  }

  setCarMotor(motor: IMotor) {
    this.car.setMotor(motor);
  }

  setCarBrakePedal(brake: IPedal) {
    this.car.setBrake(brake);
  }

  setCarGasPedal(pedal: IPedal) {
    this.car.setPedal(pedal);
  }

  setCarWheel(wheel: IWheel) {
    this.car.setWHeel(wheel);
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
