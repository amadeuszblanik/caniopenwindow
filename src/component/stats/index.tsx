import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import useBreakpoint from "../../hooks/useBreakpoint";
import Stat from "../stat";
import { StatKind } from "../stat/types";

const Stats: React.FunctionComponent = () => {
  const breakpoints = useBreakpoint();
  const isMedium = breakpoints.includes("md");

  return (
    <Flex justifyContent={isMedium ? "flex-start" : "center"}>
      <Box pr={2}>
        <Stat value="5" label="US AQI" kind={StatKind.AQI} />
      </Box>
      <Box pr={2}>
        <Stat value="20°C" label="TEMP" kind={StatKind.Temperature} />
      </Box>
      <Box>
        <Stat value="78%" label="HUM" kind={StatKind.Humidity} />
      </Box>
    </Flex>
  );
};

export default Stats;
