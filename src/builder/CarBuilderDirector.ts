import { FordWheel } from "./FordWheel";
import { FordMotor } from "./FordMotor";
import { FordBrake } from "./FordBrake";
import { FordPedal } from "./FordPedal";
import { CarBuilder } from "./CarBuilder";
export class CarBuilderDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  constructFordFiesta() {
    const id = 1324;
    const name = "Fiesta";
    const brand = "Ford";
    const birthdate = "1/1/2000";
    const power = 70;

    const pedal = new FordPedal();
    const brake = new FordBrake();
    const motor = new FordMotor();
    const wheel = new FordWheel();

    this.builder.reset();
    this.builder.setCarBrandInformations(id, name, brand, birthdate, power);
    this.builder.setCarPedal(pedal);
    this.builder.setCarBrake(brake);
    this.builder.setCarMotor(motor);
    this.builder.setCarWheel(wheel);
  }
}
