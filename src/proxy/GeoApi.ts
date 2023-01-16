import { data } from "./data";

export class GeoApi {
  dataset: Array<{ [key: string]: string | number }>;

  getCityLocation(city: string) {
    return this.dataset.filter((data) => data.name === city);
  }
}
