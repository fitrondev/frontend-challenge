import Logo from "../../assets/images/Logo.svg";

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
  return (
    <header className="py-10">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-[80px]">
          <div>
            <img src={Logo} alt="" />
          </div>

          <ul className="inline-flex items-center gap-[40px] text-[14px]">
            {links.map((item) => (
              <li
                key={item.id}
                className="text-[#9A9EA6] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
              >
                <a href={item.id}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="btn__secondary">Login</button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
