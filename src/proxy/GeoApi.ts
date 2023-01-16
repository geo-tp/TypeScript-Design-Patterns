import { data } from "./data";

export class GeoApi {
  dataset: Array<{ latitude: number; longitude: number; name: string }>;

  getCityLocation(city: string) {
    const foundCity = this.dataset.filter((data) => data.name === city);

    if (foundCity) {
      return foundCity[0];
    }

    return { name: "Not Found", latitude: 0, longitude: 0 };
  }
}
