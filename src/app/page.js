// import Image from "next/image";
// import Navy from "../../public/navy.png";

import Overskrift from "./components/Overskrift";
import Underoverskrift from "./components/Underoverskrift";
import BuyNowButton from "./components/BuyNowButton";

import Header from "./components/Header";
import GalleryOptions from "./components/GalleryOptions";
import Arrows from "./components/Arrows";
// import Dot from "./components/Dot";

export default function Home() {
  return (
    <>
      <Header />
      <section className="grid grid-cols-[1fr_1fr_auto]">
        <div className="self-center justify-self-start">
          <Overskrift />
          <Underoverskrift />
          <BuyNowButton />
        </div>
        <GalleryOptions />
        <div className="dots"></div>
      </section>
      <Arrows />
    </>
  );
}
