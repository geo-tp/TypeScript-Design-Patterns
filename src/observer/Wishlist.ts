import { Observable } from "./Observable";

export class WishList implements Observable {
  productsList: string[];

  addToWishList(productName: string): void {
    this.productsList.push(productName);
    console.log("Add " + productName + " to your wishlist");
  }
}
