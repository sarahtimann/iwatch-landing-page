import Image from "next/image";

const WatchThumb = ({ setSelectedWatch, relatedWatch, color = "mint" }) => {
  return (
    <div
      onClick={() => setSelectedWatch(relatedWatch)}
      className="relative inline-block h-[120px] w-[130px] cursor-pointer overflow-hidden rounded-2xl"
    >
      <div
        className="absolute bottom-0 left-0 h-[70%] w-full rounded-t-lg"
        style={{ backgroundColor: `var(--${color})` }}
      />
      <div className="relative z-1 flex h-full w-full items-center justify-center p-2">
        <Image src={relatedWatch} alt="Watch" width={130} height={120} />
      </div>
    </div>
  );
};

export default WatchThumb;
