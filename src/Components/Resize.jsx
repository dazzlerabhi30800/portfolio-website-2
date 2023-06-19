import React, { useEffect, useState } from "react";

export const Resize = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkWidth() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [size]);

  return size;
};
