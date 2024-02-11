const NavMenu = () => {
  return (
    <nav className="w-full">
      <ul className="text-xl md:text-base font-[500] flex flex-col md:flex-row gap-4 md:gap-12 text-Darkgrayishblue">
        <li className="cursor-pointer hover:text-Softred transition-all duration-300 ease-in-out">
          Home
        </li>
        <li className="cursor-pointer hover:text-Softred transition-all duration-300 ease-in-out">
          New
        </li>
        <li className="cursor-pointer hover:text-Softred transition-all duration-300 ease-in-out">
          Popular
        </li>
        <li className="cursor-pointer hover:text-Softred transition-all duration-300 ease-in-out">
          Trending
        </li>
        <li className="cursor-pointer hover:text-Softred transition-all duration-300 ease-in-out">
          Categories
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
