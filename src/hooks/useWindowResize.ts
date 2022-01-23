import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      setWidth(innerWidth);
      setHeight(innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
};

export default useWindowResize;
