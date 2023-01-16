import { LockedState } from "./LockedState";
import { AudioPlayerState } from "./AudioPlayerState";

export class ReadyState extends AudioPlayerState {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay(): void {
    // do something
  }
  clickNext(): void {
    // go to next song
  }
  clickPrevious(): void {
    // go to prev song
  }
}
