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
      <div className="flex items-center gap-0">
        <figure className="-ml-5 block">
          <Image
            src={selectedWatch}
            alt="Picture of Apple Watch"
            width={500}
            height={500}
          />
        </figure>
        <div className="-ml-1 flex flex-col gap-8">
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
      <div className="flex gap-10">
        <WatchThumb
          relatedWatch={mint}
          setSelectedWatch={setSelectedWatch}
          color="mint"
        />
        <WatchThumb
          relatedWatch={navy}
          setSelectedWatch={setSelectedWatch}
          color="navy"
        />
        <WatchThumb
          relatedWatch={ocean}
          setSelectedWatch={setSelectedWatch}
          color="ocean"
        />
      </div>
    </div>
  );
};

export default GalleryOptions;
