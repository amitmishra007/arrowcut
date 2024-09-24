import React, { useEffect, useState } from "react";

export const useResponsiveJSX = (breakpoints) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const updateIndex = () => {
      const width = window.innerWidth;
      const newIndex = breakpoints.findIndex((bp) => {
        return width <= bp;
      });
      setIndex(newIndex === -1 ? breakpoints.length : newIndex);
    };
    updateIndex();
    window.addEventListener("resize", updateIndex);
  }, [breakpoints]);
  return index;
};
