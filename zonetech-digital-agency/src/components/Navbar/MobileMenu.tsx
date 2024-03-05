// constants
import { NavMenu } from "../../constants/NavMenu";

const MobileMenu = () => {
  return (
    <nav className="">
      <ul className="text-primary text-2xl space-y-4">
        {NavMenu.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:text-white transition-all duration-300 ease-in-out"
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MobileMenu;
