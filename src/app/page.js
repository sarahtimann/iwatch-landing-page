// import Image from "next/image";
// import Navy from "../../public/navy.png";

import Overskrift from "./components/Overskrift";
import Underoverskrift from "./components/Underoverskrift";
import BuyNowButton from "./components/BuyNowButton";

import Header from "./components/Header";
import GalleryOptions from "./components/GalleryOptions";
import Arrows from "./components/Arrows";
import Dot from "./components/Dot";

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
        <div className="dots">
          <Dot />
          <Dot />
          <Dot />
        </div>
      </section>
      <Arrows />
    </>
  );
}
