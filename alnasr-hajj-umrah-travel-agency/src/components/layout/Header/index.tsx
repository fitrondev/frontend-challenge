import { useEffect, useState } from "react";

// image
import Logo from "../../../assets/Logo.svg";
//icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// component
import { Button } from "../../common";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <header
      className={`py-2 lg:py-4 padding: md, ${
        scroll && "sticky top-0 left-0 bg-white shadow-md z-50"
      }`}
    >
      <nav className="container flex items-end justify-between">
        <div>
          <img
            src={Logo}
            alt="alnasr travel agency logo"
            className="w-full h-10 lg:w-[120px] lg:h-[55px]"
          />
        </div>

        <div>
          <MobileNav isOpen={open} onClick={handleOpen} />
          <Navbar />
        </div>

        <div className="lg:hidden cursor-pointer">
          {!open ? (
            <RiMenu3Line
              onClick={handleOpen}
              className="w-6 h-6 hover:text-darkOrange transition-[color] duration-300 ease-in-out select-none"
            />
          ) : (
            <RiCloseLine
              onClick={handleOpen}
              className="w-7 h-7 hover:text-darkOrange transition-[color] duration-300 ease-in-out select-none"
            />
          )}
        </div>

        <div className="hidden lg:block">
          <Button variant="btn__primary" onClick={() => {}}>
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
