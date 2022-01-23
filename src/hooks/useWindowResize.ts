import { useEffect, useState } from "react";
import { debounce } from "bme-utils";

const useWindowResize = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      setWidth(innerWidth);
      setHeight(innerHeight);
    };

    window.addEventListener("resize", debounce(handleResize));
    handleResize();

    return () => window.removeEventListener("resize", debounce(handleResize));
  }, []);

  return { width, height };
};

export default useWindowResize;
