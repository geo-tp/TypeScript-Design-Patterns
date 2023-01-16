import { ReadyState } from "./ReadyState";
import { AudioPlayerState } from "./AudioPlayerState";
import { AudioPlayerUi } from "./AudioPlayerUi";

export class AudioPlayer {
  protected state: AudioPlayerState;
  protected ui: AudioPlayerUi;

  constructor() {
    this.state = new ReadyState(this);

    this.ui.lockButton.onClick(this.clickLock);
    this.ui.playButton.onClick(this.clickPlay);
    this.ui.nextButton.onClick(this.clickNext);
    this.ui.prevButton.onClick(this.clickPrevious);
  }

  changeState(state: AudioPlayerState) {
    this.state = state;
  }

  clickLock() {
    this.state.clickLock();
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickNext() {
    this.state.clickNext();
  }

  clickPrevious() {
    this.state.clickPrevious();
  }
}
