import { AudioPlayer } from "./AudioPlayer";

export abstract class AudioPlayerState {
  protected player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}
