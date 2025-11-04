"use client";

import WatchThumb from "./WatchThumb";

import Image from "next/image";
import navy from "../../../public/navy.png";
import mint from "../../../public/mint.png";
import ocean from "../../../public/ocean.png";

import Dot from "./Dot";

import { useState } from "react";

const GalleryOptions = () => {
  const [selectedWatch, setSelectedWatch] = useState(mint);
  return (
    <div className="gallery-wrapper">
      <div className="gallery-options">
        <figure>
          <Image
            src={selectedWatch}
            alt="Picture of Apple Watch"
            width={500}
            height={500}
          />
        </figure>
        <div className="dots">
          <Dot
            color="mint"
            relatedWatch={mint}
            selectedWatch={selectedWatch}
            setSelectedWatch={setSelectedWatch}
          />
          <Dot
            color="navy"
            relatedWatch={navy}
            selectedWatch={selectedWatch}
            setSelectedWatch={setSelectedWatch}
          />
          <Dot
            color="ocean"
            relatedWatch={ocean}
            selectedWatch={selectedWatch}
            setSelectedWatch={setSelectedWatch}
          />
        </div>
      </div>
      <div className="col-start-2 col-end-3 mt-8 mr-40 flex gap-10 justify-self-end">
        <WatchThumb relatedWatch={mint} setSelectedWatch={setSelectedWatch} />
        <WatchThumb relatedWatch={navy} setSelectedWatch={setSelectedWatch} />
        <WatchThumb relatedWatch={ocean} setSelectedWatch={setSelectedWatch} />
      </div>
    </div>
  );
};

export default GalleryOptions;
