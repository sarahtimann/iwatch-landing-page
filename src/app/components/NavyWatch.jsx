"use client";
import { useState } from "react";

const NavyWatch = () => {
  const [isClicked, setIsClicked] = useState(false);
  return <img src="/navy.png" alt="Navy Color" onClick={() => setIsClicked(!isClicked)} />;
};

export default NavyWatch;
