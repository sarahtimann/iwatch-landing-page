// import Image from "next/image";
// import Navy from "../../public/navy.png";

import Overskrift from "./components/Overskrift";
import Underoverskrift from "./components/Underoverskrift";
import BuyNowButton from "./components/BuyNowButton";

// import NavyWatch from "./components/NavyWatch";
// import MintWatch from "./components/MintWatch";
// import OceanWatch from "./components/OceanWatch";
import GalleryOptions from "./components/GalleryOptions";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="grid-container">
        <div className="text-content">
          <Overskrift />
          <Underoverskrift />
          <BuyNowButton />
        </div>
        <GalleryOptions />
        {/* <div className="gallery-options">
        <Image src={Navy} alt="Picture of Apple Watch" width={500} height={500} />
        <div className="color-options">
          <div className="watch-image navy">
            <NavyWatch onClick={() => console.log("Navy watch clicked")} />
          </div>
          <div className="watch-image mint">
            <MintWatch />
          </div>
          <div className="watch-image ocean">
            <OceanWatch />
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
}
