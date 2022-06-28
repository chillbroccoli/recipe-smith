import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export default function useBreakpoints() {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSM: windowDimensions?.width ? windowDimensions.width < 640 : false,
    isMD: windowDimensions?.width ? windowDimensions.width < 768 : false,
    isLG: windowDimensions?.width ? windowDimensions.width < 1024 : false,
    isXL: windowDimensions?.width ? windowDimensions.width < 1280 : false,
    isXXL: windowDimensions?.width ? windowDimensions.width < 1536 : false,
  };
}
