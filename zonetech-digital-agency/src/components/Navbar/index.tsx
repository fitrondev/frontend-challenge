import { useState } from "react";

// Components
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

// images
import Logo from "../../assets/images/Logo.svg";

//icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="relative py-2 lg:pt-10">
      <div className="container flex items-center justify-between">
        <div>
          <img src={Logo} alt="" className="h-10 sm:h-full" />
        </div>

        <div
          className="lg:hidden cursor-pointer select-none"
          onClick={handleOpen}
        >
          {!open ? (
            <HiMenuAlt3 className="h-6 w-6 sm:h-10 sm:w-10 text-blueDark" />
          ) : (
            <IoClose className="h-6 w-6 sm:h-10 sm:w-10 text-yellow" />
          )}
        </div>

        {open && (
          <div className="absolute w-5/6 sm:w-3/6 h-screen bg-blueDark top-[58px] sm:top-[70px] right-0 flex justify-start items-center pl-5 z-50">
            <MobileMenu />
          </div>
        )}

        <Menu />
      </div>
    </header>
  );
};
export default Navbar;
