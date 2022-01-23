import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const MAX_WIDTH_DEFAULT = 520;

interface StatusIllustrationProps {
  maxWidth?: number;
}

const StatusIllustration: React.FunctionComponent<StatusIllustrationProps> = ({ maxWidth }) => (
  <Box maxW={maxWidth}>
    <Image src={require("./../../../public/assets/undraw_through_the_park_lxnl.svg")} alt="Status illustration" />
  </Box>
);

StatusIllustration.defaultProps = {
  maxWidth: MAX_WIDTH_DEFAULT,
};

export default StatusIllustration;
