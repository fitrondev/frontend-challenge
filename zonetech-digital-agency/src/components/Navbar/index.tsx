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
    <header className="relative py-2 shadow-sm">
      <div className="container flex items-center justify-between">
        <div>
          <img src={Logo} alt="" className="h-10 lg:h-[66px] lg:w-[180px]" />
        </div>

        <div className="lg:hidden cursor-pointer" onClick={handleOpen}>
          {!open ? (
            <HiMenuAlt3 className="h-6 w-6 text-secodary" />
          ) : (
            <IoClose className="h-6 w-6 text-primary" />
          )}
        </div>

        {open && (
          <div className="absolute w-5/6 h-screen bg-secodary top-[58px] right-0 flex justify-start items-center pl-5">
            <MobileMenu />
          </div>
        )}

        <Menu />
      </div>
    </header>
  );
};
export default Navbar;
