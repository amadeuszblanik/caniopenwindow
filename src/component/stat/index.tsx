import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { StatKind } from "./types";
import { firstElement } from "bme-utils";
import { colorStatKind, highestValueElement } from "../../utils";

interface StatProps {
  value: string;
  label: string;
  kind: StatKind;
}

const STAT_KIND_AQI = 150;
const STAT_KIND_HUMIDITY = 100;
const STAT_KIND_TEMPERATURE = 50;

const MAX_VALUES_PER_KIND = {
  [StatKind.AQI]: STAT_KIND_AQI,
  [StatKind.Humidity]: STAT_KIND_HUMIDITY,
  [StatKind.Temperature]: STAT_KIND_TEMPERATURE,
};

const TO_PERCENT = 100;

const Stat: React.FunctionComponent<StatProps> = ({ value, label, kind }) => {
  const valueAsNumber = parseInt(value);
  const color = colorStatKind(kind, valueAsNumber);

  const progressValue = (Math.abs(valueAsNumber) / MAX_VALUES_PER_KIND[kind]) * TO_PERCENT;

  return (
    <CircularProgress value={progressValue} size="120px" color={color}>
      <CircularProgressLabel lineHeight={1}>
        {value}
        <br />
        <small>{label}</small>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Stat;
