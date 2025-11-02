"use client";

const Dot = ({ selectedWatch, setSelectedWatch, relatedWatch, color = "mint" }) => {
  const isActive = selectedWatch === relatedWatch;

  return (
    <div
      onClick={() => setSelectedWatch(relatedWatch)}
      className={`dot cursor-pointer w-10 h-10 rounded-full ${isActive ? "border-4" : ""}`}
      style={{
        backgroundColor: isActive ? `var(--${color})` : "transparent",
        borderColor: `var(--${color})`,
      }}
    />
  );
};

export default Dot;
