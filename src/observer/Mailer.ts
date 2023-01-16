import { Observable } from "./Observable";

export class Mailer implements Observable {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  addToWishList(productName: string): void {
    console.log("Send email for product " + productName + "to " + this.email);
  }
}
