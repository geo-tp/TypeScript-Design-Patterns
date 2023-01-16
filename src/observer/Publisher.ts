import { Observable } from "./Observable";

export class Publisher {
  subscribers: Array<Observable>;

  subscribe(subscriver: Observable) {
    this.subscribers.push(subscriver);
  }

  unscubscribe(subscriber: Observable) {
    this.subscribers.filter((sub) => sub !== subscriber);
  }

  fire(productName: string) {
    for (let subscriber of this.subscribers) {
      subscriber.addToWishList(productName);
    }
  }
}
