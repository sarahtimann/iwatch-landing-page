"use client";

import WatchThumb from "./WatchThumb";

import Image from "next/image";
import navy from "../../../public/navy.png";
import mint from "../../../public/mint.png";
import ocean from "../../../public/ocean.png";

import { useState } from "react";

const GalleryOptions = () => {
  const [selectedWatch, setSelectedWatch] = useState(mint);
  return (
    <div className="gallery-options">
      <Image src={selectedWatch} alt="Picture of Apple Watch" width={500} height={500} />
      <div className="color-options">
        <div className="watch-image navy">
          <WatchThumb setSelectedWatch={setSelectedWatch} relatedWatch={navy} />
        </div>
        <div className="watch-image mint">
          <WatchThumb setSelectedWatch={setSelectedWatch} relatedWatch={mint} />
        </div>
        <div className="watch-image ocean">
          <WatchThumb setSelectedWatch={setSelectedWatch} relatedWatch={ocean} />
        </div>
      </div>
    </div>
  );
};

export default GalleryOptions;
