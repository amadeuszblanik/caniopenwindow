import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { Breakpoints } from "../../settings/breakpoints";
import StatusIllustration from "../../component/statusIllustration";

const GRID_ELEMENTS_DEFAULT = 1;
const GRID_ELEMENTS_MEDIUM = 2;
const ILLUSTRATION_ORDER_DEFAULT = -1;
const ILLUSTRATION_ORDER_MEDIUM = 1;

const SectionResults: React.FunctionComponent = () => {
  const [isMedium, setIsMedium] = useState<boolean>(false);
  const { width } = useWindowResize();

  useEffect(() => {
    if (!width) {
      return;
    }

    setIsMedium(Boolean(width && width >= Breakpoints.Medium));
  }, [width]);

  return (
    <Container maxW="container.xl" centerContent>
      <Grid
        templateColumns={`repeat(${isMedium ? GRID_ELEMENTS_MEDIUM : GRID_ELEMENTS_DEFAULT}, 1fr)`}
        gap={6}
        alignItems="center"
        py={5}
      >
        <GridItem w="100%">
          <Flex pb={5} justifyContent={isMedium ? "flex-start" : "center"}>
            <Box pr={2}>
              <CircularProgress value={5} size="120px" color="green.700">
                <CircularProgressLabel>
                  5<br />
                  <small>US AQI</small>
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box pr={2}>
              <CircularProgress value={20} size="120px" color="green.700">
                <CircularProgressLabel>20°C</CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box>
              <CircularProgress value={78} size="120px" color="blue.500">
                <CircularProgressLabel>78%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
          <Heading color="green.700" textAlign={isMedium ? "left" : "center"}>
            It&apos;s a wonderful day to go outside!
          </Heading>
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
