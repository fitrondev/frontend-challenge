import { useState } from "react";

// components
import Search from "../search/Search";
import { navLinks } from "./navLinks";

// icons
import {
  RiBook3Line,
  RiMoonLine,
  RiSearchLine,
  RiUserLine,
} from "@remixicon/react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-bodyColor z-10 transition duration-300">
      <nav className="container h-14 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-firstColor font-medium">
          <RiBook3Line className="w-6 h-6" />
          E-Book
        </div>

        <div className="fixed bottom-0 left-0 right-0 w-full bg-containerColor shadow py-5 px-5 transition-all duration-300 ">
          <ul className="flex justify-between">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="text-textColor hover:text-firstColor transition-all duration-300"
              >
                <a href={item.id} className="">
                  <span>{item.icon}</span>
                  <span className="hidden">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <RiSearchLine
              className="w-5 h-5 cursor-pointer text-textColor hover:text-firstColor transition-all duration-300"
              onClick={handleSearch}
            />
            <RiUserLine className="w-5 h-5 cursor-pointer text-textColor hover:text-firstColor transition-all duration-300" />
            <div>
              <RiMoonLine className="w-5 h-5 cursor-pointer text-textColor hover:text-firstColor transition-all duration-300" />
            </div>
          </div>
        </div>
      </nav>

      <Search handleSearch={handleSearch} isOpen={isSearchOpen} />
    </header>
  );
};
export default Header;
