"use client";

import NavyWatch from "./NavyWatch";
import MintWatch from "./MintWatch";
import OceanWatch from "./OceanWatch";

import Image from "next/image";
import navy from "../../../public/navy.png";

import { useState } from "react";

const GalleryOptions = () => {
  const [selectedWatch, setSelectedWatch] = useState(navy);
  return (
    <div className="gallery-options">
      <Image src={selectedWatch} alt="Picture of Apple Watch" width={500} height={500} />
      <div className="color-options">
        <div className="watch-image navy">
          <NavyWatch onClick={() => setSelectedWatch("navy")} />
        </div>
        <div className="watch-image mint">
          <MintWatch onClick={() => setSelectedWatch("mint")} />
        </div>
        <div className="watch-image ocean">
          <OceanWatch onClick={() => setSelectedWatch("ocean")} />
        </div>
      </div>
    </div>
  );
};

export default GalleryOptions;
