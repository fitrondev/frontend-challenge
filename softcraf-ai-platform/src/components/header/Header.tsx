import { useEffect, useState } from "react";
import { navLinks } from "@/constants/data";

// images & icons
import { Logo } from "@/constants/images";
import { Menu, X } from "lucide-react";

// ui
import { Button } from "../ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`container sticky ${
        scroll && "top-0 left-0 bg-[#F4EDE5] z-50"
      } h-16 flex items-center justify-between transition duration-300 ease-in-out`}>
      <div>
        <img src={Logo} alt="" className="w-full h-8" />
      </div>

      <div
        className="lg:hidden select-none cursor-pointer"
        onClick={handleMenu}>
        {!open ? <Menu className="size-8" /> : <X className="size-8" />}
      </div>

      <div className="hidden lg:block">
        <ul className="font-inter flex gap-6">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <Button variant={"ghost"}>Log in</Button>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
