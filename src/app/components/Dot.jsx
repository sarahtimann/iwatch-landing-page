"use client";
import { useState } from "react";

const Dot = () => {
  const [selectedWatch, setSelectedWatch] = useState(false);
  return <div className={`dot ${selectedWatch ? "active" : ""}`} onClick={() => setSelectedWatch(!selectedWatch)} />;
};

export default Dot;
