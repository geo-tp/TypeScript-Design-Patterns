import { Viewable } from "./Viewable";

export class SwingView implements Viewable {
  promptforId(): void {
    console.log("Here is prompt from Swing View");
  }

  showPlayer(): void {
    console.log("Here is show player from Swing View");
  }
}
