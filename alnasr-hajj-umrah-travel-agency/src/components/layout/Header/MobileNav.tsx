import { navLinks } from "../../../constants/data";

type MobileNavProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClick }) => {
  return (
    <>
      <div
        className={`w-full h-screen fixed top-[57px] ${
          isOpen ? "right-0" : "-right-full"
        } bg-transparent z-40"`}
        onClick={onClick}
      />
      <ul
        className={`fixed top-[57px] ${
          isOpen ? "right-0" : "-right-full"
        } bg-darkGreen w-5/6 sm:w-3/6 h-screen flex flex-col justify-center pl-8 gap-5 sm:gap-8 text-2xl shadow-2xl z-50 transition-[right] duration-1000 ease-in-out`}
      >
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="text-white hover:text-darkOrange transition-[color] duration-300 ease-in-out"
          >
            <a href={item.id}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MobileNav;
