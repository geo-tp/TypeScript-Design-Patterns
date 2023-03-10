import { IWheel } from "./interfaces/IWheel";
import { IPedal } from "./interfaces/IPedal";
import { IMotor } from "./interfaces/IMotor";
import { Vehicle } from "./abstracts/AVehicle";

export class Car extends Vehicle {
  private motor: IMotor;
  private pedal: IPedal;
  private wheel: IWheel;
  private brake: IPedal;

  setMotor(motor: IMotor) {
    this.motor = motor;
  }

  setPedal(pedal: IPedal) {
    this.pedal = pedal;
  }

  setWHeel(wheel: IWheel) {
    this.wheel = wheel;
  }

  setBrake(brake: IPedal) {
    this.brake = brake;
  }

  setInformation(id: number, name: string, model: string, birthdate: string) {
    this.setId = id;
    this.setName = name;
    this.setBrand = model;
    this.setBirthdate = birthdate;
  }

  start(): boolean {
    if (this.motor && this.pedal && this.wheel && this.brake) {
      this.motor.startEngine();
      console.log("Engine Is Started");
      return true;
    }

    return false;
  }

  stop(): boolean {
    if (this.motor.getIsRunning()) {
      this.motor.stopEngine();
      return true;
    }

    return false;
  }
}
