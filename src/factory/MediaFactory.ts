import { IMedia } from "./IMedia";
import { Video } from "./Video";
import { Img } from "./Img";

export class MediaFactory {
  constructor(data: { [key: string]: any }, type: string) {
    switch (type) {
      case "video":
        return new Video(data.name, data.size);

      case "img":
        return new Img(data.name, data.size);

      default:
        throw "INCORRECT TYPE";
    }
  }
}
