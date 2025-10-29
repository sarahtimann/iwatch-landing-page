import Image from "next/image";
import Navy from "../../public/navy.png";

import Overskrift from "./components/Overskrift";
import Underoverskrift from "./components/Underoverskrift";
import BuyNowButton from "./components/BuyNowButton";

import NavyWatch from "./components/NavyWatch";
import MintWatch from "./components/MintWatch";
import OceanWatch from "./components/OceanWatch";

export default function Home() {
  return (
    <section className="grid-container">
      <div>
        <Overskrift />
        <Underoverskrift />
        <BuyNowButton />
      </div>
      <Image src={Navy} alt="Picture of Apple Watch" width={500} height={500} />
      <div className="color-options">
        <NavyWatch />
        <MintWatch />
        <OceanWatch />
      </div>
    </section>
  );
}
