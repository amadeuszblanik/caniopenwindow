import { Box, Container, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StatusIllustration from "../../component/statusIllustration";
import Stats from "../../component/stats";
import useBreakpoint from "../../hooks/useBreakpoint";
import { highestValueElement } from "../../utils";

const GRID_ELEMENTS_DEFAULT = 1;
const GRID_ELEMENTS_MEDIUM = 2;
const ILLUSTRATION_ORDER_DEFAULT = -1;
const ILLUSTRATION_ORDER_MEDIUM = 1;

const HEADER_COPY = {
  "0": "It's a wonderful day to go outside!",
  "51": "It's been better.",
  "101": "If you can better stay at home.",
  "151": "Home sweet home.",
  "201": "Air outside might cause serious health effects!",
  "301": "There's serious air pollution outside. Stay at home!",
};

interface SectionResultsProps {
  aqi: number;
  temperature: number;
  humidity: number;
  city: string;
  state: string;
  country: string;
  lastUpdateTemperature: Date;
  lastUpdatePollution: Date;
}

const SectionResults: React.FunctionComponent<SectionResultsProps> = ({
  aqi,
  temperature,
  humidity,
  city,
  state,
  country,
  lastUpdateTemperature,
  lastUpdatePollution,
}) => {
  const breakpoints = useBreakpoint();
  const isMedium = breakpoints.includes("md");

  const headerCopy = highestValueElement(HEADER_COPY, aqi) || "Something gone wrong.";

  return (
    <Container maxW="container.xl" centerContent>
      <Grid
        w="100%"
        templateColumns={`repeat(${isMedium ? GRID_ELEMENTS_MEDIUM : GRID_ELEMENTS_DEFAULT}, 1fr)`}
        gap={6}
        alignItems="center"
        py={5}
      >
        <GridItem w="100%">
          <Box pb={5}>
            <Stats aqi={aqi} temperature={temperature} humidity={humidity} />
          </Box>
          <Box pb={5}>
            <Heading minH={100} color="green.700" textAlign={isMedium ? "left" : "center"}>
              {headerCopy}
            </Heading>
          </Box>
          <Text>
            Location: {city}, {state}, {country}.
            <br />
            {lastUpdateTemperature === lastUpdatePollution ? (
              <>Last update: {lastUpdateTemperature.toLocaleTimeString("en-GB")}.</>
            ) : (
              <>
                Last update temperature: {lastUpdateTemperature.toLocaleTimeString("en-GB")}.
                <br />
                Last update pollution: {lastUpdatePollution.toLocaleTimeString("en-GB")}.
              </>
            )}
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          order={isMedium ? ILLUSTRATION_ORDER_MEDIUM : ILLUSTRATION_ORDER_DEFAULT}
          alignItems="center"
        >
          <Flex justifyContent="center">
            <StatusIllustration />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SectionResults;
