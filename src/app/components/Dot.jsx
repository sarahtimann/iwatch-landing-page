"use client";

const Dot = ({
  selectedWatch,
  setSelectedWatch,
  relatedWatch,
  color = "mint",
}) => {
  const isActive = selectedWatch === relatedWatch;
  const cssVar = `var(--${color})`;

  return (
    <div
      onClick={() => setSelectedWatch(relatedWatch)}
      className={`dot h-10 w-10 cursor-pointer rounded-full ${isActive ? "border-4" : ""}`}
      style={{
        backgroundColor: cssVar,
        border: isActive ? "3px solid #fff" : `2px solid var(--${color})`,
      }}
    />
  );
};

export default Dot;
