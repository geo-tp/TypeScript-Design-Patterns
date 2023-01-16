import { Viewable } from "./Viewable";

export class AppViewables implements Viewable {
  views: Viewable[];

  constructor() {
    this.views = [];
  }

  addViewable(view: Viewable) {
    this.views.push(view);
  }

  promptforId(): void {
    for (let view of this.views) {
      view.promptforId();
    }
  }
  showPlayer(): void {
    for (let view of this.views) {
      view.showPlayer();
    }
  }
}
