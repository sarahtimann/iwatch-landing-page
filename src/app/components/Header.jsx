import { SiApple } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div className="apple-icon">
        <SiApple />
      </div>
      <div className="header-center">
        <h3>Mac</h3>
        <h3>iPhone</h3>
        <h3>iPod</h3>
        <h3 className="iwatch-text">iWatch</h3>
        <h3>Support</h3>
      </div>
      <div className="header-icons">
        <IoSearch />
        <LuShoppingBag />
      </div>
    </header>
  );
};

export default Header;
