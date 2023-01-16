import { ReadyState } from "./ReadyState";
import { AudioPlayerState } from "./AudioPlayerState";

export class LockedState extends AudioPlayerState {
  clickLock(): void {
    this.player.changeState(new ReadyState(this.player));
  }
  clickPlay(): void {
    // Nothing, audio player is locked
  }
  clickNext(): void {
    // Nothing, audio player is locked
  }
  clickPrevious(): void {
    // Nothing, audio player is locked
  }
}
