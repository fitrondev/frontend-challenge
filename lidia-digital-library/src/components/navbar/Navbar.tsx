import { useEffect, useState } from "react";
// images
import Logo from "../../assets/images/Logo.svg";

// icons
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    id: "#features",
    title: "Features",
  },
  {
    id: "#services",
    title: "Services",
  },
  {
    id: "#reviews",
    title: "Reviews",
  },
  {
    id: "#location",
    title: "Location",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
      className={`${
        scroll
          ? "bg-white sticky top-0 left-0 py-4  md:py-5 z-30 border-b border-gray-300"
          : "py-4 md:py-10"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-[80px]">
          <div>
            <img src={Logo} alt="" />
          </div>

          <ul className="hidden lg:inline-flex gap-[40px]">
            {links.map((item) => (
              <li
                key={item.id}
                className="text-[14px] lg:text-[#9A9EA6] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
              >
                <a href={item.id}>{item.title}</a>
              </li>
            ))}
          </ul>

          <ul
            className={`lg:hidden fixed top-[61px] ${
              open ? "right-0" : "-right-full"
            } w-5/6 sm:w-3/6 h-screen bg-white flex flex-col items-start justify-center gap-[40px]  pl-10 shadow-xl z-50 transition-right duration-1000 ease-in-out`}
          >
            {links.map((item) => (
              <li
                key={item.id}
                className="text-[22px] text-black hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
              >
                <a href={item.id}>{item.title}</a>
              </li>
            ))}
            <li className="text-[22px] text-black hover:text-primary transition-all duration-300 ease-in-out">
              <button>Login</button>
            </li>
          </ul>
        </div>

        <div
          onClick={handleOpen}
          className="lg:hidden select-none cursor-pointer"
        >
          {!open ? (
            <RiMenu3Fill className="w-6 h-6 text-black" />
          ) : (
            <IoMdClose className="w-6 h-6 text-black" />
          )}
        </div>

        <div className="hidden lg:block z-50">
          <button
            className={`btn__secondary ${
              scroll ? "bg-primary text-white" : "bg-white text-heading"
            }`}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
