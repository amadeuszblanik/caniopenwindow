import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import useBreakpoint from "../../hooks/useBreakpoint";
import Stat from "../stat";
import { StatKind } from "../stat/types";

interface StatsProps {
  aqi: number;
  temperature: number;
  humidity: number;
}

const Stats: React.FunctionComponent<StatsProps> = ({ aqi, temperature, humidity }) => {
  const breakpoints = useBreakpoint();
  const isMedium = breakpoints.includes("md");

  return (
    <Flex justifyContent={isMedium ? "flex-start" : "center"}>
      <Box pr={2}>
        <Stat value={String(aqi)} label="US AQI" kind={StatKind.AQI} />
      </Box>
      <Box pr={2}>
        <Stat value={`${temperature}°C`} label="TEMP" kind={StatKind.Temperature} />
      </Box>
      <Box>
        <Stat value={`${humidity}%`} label="HUM" kind={StatKind.Humidity} />
      </Box>
    </Flex>
  );
};

export default Stats;
