import { Viewable } from "./Viewable";

export class CliView implements Viewable {
  promptforId(): void {
    console.log("Here is prompt from Cli View");
  }

  showPlayer(): void {
    console.log("Here is show player from Cli View");
  }
}
