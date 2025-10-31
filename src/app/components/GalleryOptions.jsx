"use client";

import NavyWatch from "./NavyWatch";
import MintWatch from "./MintWatch";
import OceanWatch from "./OceanWatch";

import Image from "next/image";
import Navy from "../../../public/navy.png";

import { useState } from "react";

const GalleryOptions = () => {
  const [selectedWatch, setSelectedWatch] = useState(true);
  return (
    selectedWatch && (
      <div className="gallery-options">
        <Image src={Navy} alt="Picture of Apple Watch" width={500} height={500} />
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
        {selectedWatch && <div className="selected-watch">Valgt: {selectedWatch}</div>}
      </div>
    )
  );
};

export default GalleryOptions;
