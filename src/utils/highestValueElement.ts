import { firstElement } from "bme-utils";

const highestValueElement = <T = string>(obj: { [key: string]: T }, breakpointValue: number): T | null =>
  firstElement(
    Object.entries(obj)
      .filter(([key]) => breakpointValue >= Number(key))
      .sort(([sortA], [sortB]) => Number(sortB) - Number(sortA))
      .map(([__, value]) => value),
  );

export default highestValueElement;
