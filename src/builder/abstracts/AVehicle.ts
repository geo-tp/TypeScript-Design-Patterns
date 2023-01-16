export abstract class Vehicle {
  private id: number;
  private name: string;
  private brand: string;
  private birthdate: string;
  private power: number;

  set setId(id: number) {
    this.id = id;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setBrand(brand: string) {
    this.brand = brand;
  }

  set setBirthdate(date: string) {
    this.birthdate = date;
  }

  set setPower(power: number) {
    this.power = power;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getBrand() {
    return this.brand;
  }

  get getBirthdate() {
    return this.birthdate;
  }

  get getPower() {
    return this.power;
  }
}
