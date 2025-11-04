import { SiApple } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header className="mr-40 flex items-center justify-between">
      <div className="text-3xl text-white">
        <SiApple />
      </div>
      <div className="flex items-center gap-18">
        <h3>Mac</h3>
        <h3>iPhone</h3>
        <h3>iPod</h3>
        <h3 className="rounded-4xl bg-stone-50 px-[20px] py-[5px] text-[#b6ccda] outline outline-1 outline-white">
          iWatch
        </h3>
        <h3>Support</h3>
      </div>
      <div className="flex gap-4 text-[20px] text-white">
        <IoSearch />
        <LuShoppingBag />
      </div>
    </header>
  );
};

export default Header;
