import { Box, Container, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StatusIllustration from "../../component/statusIllustration";
import Stats from "../../component/stats";
import useBreakpoint from "../../hooks/useBreakpoint";

const GRID_ELEMENTS_DEFAULT = 1;
const GRID_ELEMENTS_MEDIUM = 2;
const ILLUSTRATION_ORDER_DEFAULT = -1;
const ILLUSTRATION_ORDER_MEDIUM = 1;

const SectionResults: React.FunctionComponent = () => {
  const breakpoints = useBreakpoint();
  const isMedium = breakpoints.includes("md");

  return (
    <Container maxW="container.xl" centerContent>
      <Grid
        templateColumns={`repeat(${isMedium ? GRID_ELEMENTS_MEDIUM : GRID_ELEMENTS_DEFAULT}, 1fr)`}
        gap={6}
        alignItems="center"
        py={5}
      >
        <GridItem w="100%">
          <Box pb={5}>
            <Stats />
          </Box>
          <Box pb={5}>
            <Heading color="green.700" textAlign={isMedium ? "left" : "center"}>
              It&apos;s a wonderful day to go outside!
            </Heading>
          </Box>
          <Text>
            Location: London, Greater London, United Kingdom
            <br />
            Last update: {new Date("2022-01-23T15:00:00.000Z").toLocaleDateString()}
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
