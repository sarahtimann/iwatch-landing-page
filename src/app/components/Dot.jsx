"use client";

const Dot = ({ selectedWatch, setSelectedWatch, relatedWatch, color }) => {
  return <div onClick={() => setSelectedWatch(relatedWatch)} style={{ backgroundColor: `var(--${color})` }} className={`cursor-pointer w-10 h-10 rounded-full ${selectedWatch === relatedWatch ? "border-4 border-black" : ""}`} />;
};

export default Dot;
