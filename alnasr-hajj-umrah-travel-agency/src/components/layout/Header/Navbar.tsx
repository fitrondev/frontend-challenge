import { navLinks } from "../../../constants/data";

const Navbar = () => {
  return (
    <ul className="hidden lg:flex gap-[40px] text-xl font-medium">
      {navLinks.map((item, index) => (
        <li
          key={index}
          className="hover:text-darkOrange transition-colors duration-300 ease-in-out"
        >
          <a href={item.id}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default Navbar;
