import { GeoApi } from "./GeoApi";
export class GeoApiProxy {
  api: GeoApi;
  cachedDataset: {
    [key: string]: { latitude: number; longitude: number; name: string };
  };

  constructor(api: GeoApi) {
    this.api = api;
  }

  getCityLocation(city: string) {
    const cachedCity = this.cachedDataset[city];

    if (cachedCity) {
      return cachedCity;
    }

    const apiResponse = this.api.getCityLocation(city);
    this.cachedDataset[city] = apiResponse;

    return apiResponse;
  }
}
