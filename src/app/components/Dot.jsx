"use client";

const Dot = ({ selectedWatch, setSelectedWatch, relatedWatch, color = "mint" }) => {
  const isActive = selectedWatch === relatedWatch;
  const cssVar = `var(--${color})`;

  return (
    <div
      onClick={() => setSelectedWatch(relatedWatch)}
      className={`dot cursor-pointer w-10 h-10 rounded-full ${isActive ? "border-4" : ""}`}
      style={{
        backgroundColor: cssVar,
        border: isActive ? "3px solid #fff" : `2px solid var(--${color})`,
      }}
    />
  );
};

export default Dot;
