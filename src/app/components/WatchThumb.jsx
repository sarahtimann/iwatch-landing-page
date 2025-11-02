import Image from "next/image";
const WatchThumb = ({ setSelectedWatch, relatedWatch }) => {
  return <Image src={relatedWatch} alt="Watch" onClick={() => setSelectedWatch(relatedWatch)} width={130} height={120} />;
};

export default WatchThumb;
