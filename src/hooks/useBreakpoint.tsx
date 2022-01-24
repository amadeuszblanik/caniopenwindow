import { useEffect, useState } from "react";
import Breakpoints from "../settings/breakpoints";
import useWindowResize from "./useWindowResize";

const useBreakpoint = () => {
  const [breakpoints, setBreakpoints] = useState<string[]>([]);
  const { width } = useWindowResize();

  useEffect(() => {
    if (!width) {
      return;
    }

    const breakpointsAsArray = Object.entries(Breakpoints).filter(
      ([_, breakpointValue]) => typeof breakpointValue === "number",
    ) as [string, number][];

    const breakpointsPassed = breakpointsAsArray
      .filter(([_, breakpointValue]) => width >= breakpointValue)
      .map(([breakpointKey]) => breakpointKey);

    setBreakpoints(breakpointsPassed);
  }, [width]);

  return breakpoints;
};

export default useBreakpoint;
