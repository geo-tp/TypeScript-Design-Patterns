import { FordWheel } from "./FordWheel";
import { FordMotor } from "./FordMotor";
import { FordBrakePedal } from "./FordBrakePedal";
import { FordGasPedal } from "./FordGasPedal";
import { CarBuilder } from "./CarBuilder";
export class CarBuilderDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  constructFordFiesta() {
    const id = 1234;
    const name = "Fiesta";
    const brand = "Ford";
    const birthdate = "01/01/2000";

    const gasPedal = new FordGasPedal();
    const brakePedal = new FordBrakePedal();
    const motor = new FordMotor();
    const wheel = new FordWheel();

    this.builder.reset();
    this.builder.setCarBrandInformations(id, name, brand, birthdate);
    this.builder.setCarGasPedal(gasPedal);
    this.builder.setCarBrakePedal(brakePedal);
    this.builder.setCarMotor(motor);
    this.builder.setCarWheel(wheel);
  }
}
