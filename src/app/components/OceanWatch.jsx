"use client";
import { useState } from "react";

const OceanWatch = () => {
  const [isClicked, setIsClicked] = useState(false);
  return <img src="/ocean.png" alt="Ocean Color" onClick={() => setIsClicked(!isClicked)} />;
};

export default OceanWatch;
