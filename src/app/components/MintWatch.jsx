"use client";
import { useState } from "react";

const MintWatch = () => {
  const [isClicked, setIsClicked] = useState(false);
  return <img src="/mint.png" alt="Mint Color" onClick={() => setIsClicked(!isClicked)} />;
};

export default MintWatch;
