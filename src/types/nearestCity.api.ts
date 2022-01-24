import { StatusApi } from "./status.api";

export interface NearestCityApi {
  status: StatusApi.Success;
  data: {
    city: string;
    state: string;
    country: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    current: {
      weather: {
        ts: Date | string; // timestamp
        tp: number; // temperature in Celsius
        pr: number; // atmospheric pressure in hPa
        hu: number; // humidity %
        ws: number; // wind speed (m/s)
        wd: number; // wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
        ic: string; // weather icon code, see https://api-docs.iqair.com/?version=latest#5ea0dcc1-78c3-4939-aa80-6d4929646b82 for icon index
      };
      pollution: {
        ts: Date | string; // timestamp
        aqius: number; // AQI value based on US EPA standard
        mainus: string; // main pollutant for US AQI
        aqicn: number; // AQI value based on China MEP standard
        maincn: string; // main pollutant for Chinese AQI
      };
    };
  };
}
