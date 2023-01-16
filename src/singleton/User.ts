export class User {
  private id: number;
  private firstname: string;
  private lastname: string;
  private address: string;

  static exists: boolean;
  static instance: User;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    address: string
  ) {
    if (User.exists) {
      return User.instance;
    }

    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    User.exists = true;
    User.instance = this;
  }

  getId() {
    return this.id;
  }

  getFirstname() {
    return this.firstname;
  }

  getLastname() {
    return this.lastname;
  }

  getAddress() {
    return this.address;
  }

  getUser() {
    return {
      id: this.id,
      lastname: this.lastname,
      firstname: this.firstname,
      address: this.address,
    };
  }
}
