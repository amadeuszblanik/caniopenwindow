import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { StatKind } from "./types";
import { firstElement } from "bme-utils";

interface StatProps {
  value: string;
  label: string;
  kind: StatKind;
}

const STAT_KIND_AQI = 150;
const STAT_KIND_HUMIDITY = 100;
const STAT_KIND_TEMPERATURE = 100;

const MAX_VALUES_PER_KIND = {
  [StatKind.AQI]: STAT_KIND_AQI,
  [StatKind.Humidity]: STAT_KIND_HUMIDITY,
  [StatKind.Temperature]: STAT_KIND_TEMPERATURE,
};

const COLOR_VALUES = {
  [StatKind.AQI]: {
    "0": "green.500",
    "50": "yellow.300",
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

const TO_PERCENT = 100;
const TEMPERATURE_ADD = 50;

const Stat: React.FunctionComponent<StatProps> = ({ value, label, kind }) => {
  const valueAsNumber = parseInt(value);
  const valueToCalculate = Number(kind === StatKind.Temperature ? valueAsNumber + TEMPERATURE_ADD : valueAsNumber);
  const colorValuesByKind = Object.entries(COLOR_VALUES[kind])
    .sort(([sortA], [sortB]) => Number(sortB) - Number(sortA))
    .filter(([key]) => valueAsNumber >= Number(key))
    .map(([_, colorName]) => colorName);

  const color = firstElement(colorValuesByKind) || "gray.500";

  const progressValue = (valueToCalculate / MAX_VALUES_PER_KIND[kind]) * TO_PERCENT;

  return (
    <CircularProgress value={progressValue} size="120px" color={color}>
      <CircularProgressLabel>
        {value}
        <br />
        <small>{label}</small>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Stat;
