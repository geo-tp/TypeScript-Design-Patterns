import { Viewable } from "./Viewable";
export class CliView implements Viewable {
  promptforId(): number {
    console.log("Here is prompt from Cli View");
    return 1;
  }
  showPlayer(): void {
    console.log("Here is show player from Cli View");
  }
}
