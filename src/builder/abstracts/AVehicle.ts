export abstract class Vehicle {
  private id: number;
  private name: string;
  private brand: string;
  private birthdate: string;

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
}
