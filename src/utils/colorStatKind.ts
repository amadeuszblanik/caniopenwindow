import { StatKind } from "../component/stat/types";
import highestValueElement from "./highestValueElement";

const COLOR_VALUES = {
  [StatKind.AQI]: {
    "0": "green.500",
    "50": "yellow.500",
    "150": "orange.400",
    "200": "purple.500",
    "300": "red.800",
  },
  [StatKind.Humidity]: {
    "0": "orange.300",
    "20": "green.500",
    "60": "blue.400",
  },
  [StatKind.Temperature]: {
    "-100": "blue.500",
    "10": "teal.400",
    "18": "green.500",
    "32": "orange.300",
  },
};

const colorStatKind = (statKind: StatKind, value: number) =>
  highestValueElement(COLOR_VALUES[statKind], value) || "gray.500";

export default colorStatKind;
