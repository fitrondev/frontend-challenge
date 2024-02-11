import { useState } from "react";
import NavMenu from "./NavMenu";

// image file
import Logo from "../assets/images/logo.svg";
import OpenMenu from "../assets/images/icon-menu.svg";
import CloseMenu from "../assets/images/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center h-14 lg:h-20 py-4 my-4">
      <div className="">
        <img src={Logo} alt="" />
      </div>

      <div className="hidden md:block">
        <NavMenu />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <img
          src={OpenMenu}
          alt=""
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {isOpen && (
        <div className="bg-black w-full bg-opacity-50 absolute right-0 top-0 h-screen z-40 animate-fade-left animate-once animate-duration-500 animate-ease-linear">
          <div className="bg-white w-[70%] absolute right-0 top-0 h-screen z-50 animate-fade-left animate-once animate-duration-500 animate-ease-linear">
            <div className="">
              <img
                src={CloseMenu}
                alt=""
                className="absolute right-5 top-7 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            <div className="h-full flex items-center justify-center pl-4">
              <NavMenu />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
