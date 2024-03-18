import Hero21 from "../../../assets/Hero21.png";
import {
  officePlace,
  packageHajj,
  packageUmrah,
  quickLink,
  socialMedia,
} from "../../../constants/footerData";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="lg:pt-8 bg-darkGreen text-white">
      <div className="container">
        <div className="hidden pb-4 lg:flex justify-between">
          <div className="w-[270px] space-y-4">
            <div className="max-w-fit py-2 px-3 rounded-lg bg-gray-200">
              <img src={Hero21} alt="" className="w-[250px] h-[50px]" />
            </div>

            <p className="font-semibold">
              Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-nunito text-white">
              Quick Link
            </h3>

            <ul className="space-y-2">
              {quickLink.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] font-medium cursor-pointer hover:text-darkOrange transition-all duration-300 ease-in-out"
                >
                  <a href={item.id}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-nunito text-white">
              Package Umrah
            </h3>

            <ul className="space-y-2">
              {packageUmrah.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] font-medium cursor-pointer hover:text-darkOrange transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-nunito text-white">
              Package Hajj
            </h3>

            <ul className="space-y-2">
              {packageHajj.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] font-medium cursor-pointer hover:text-darkOrange transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-nunito text-white">
              Office Place
            </h3>

            <ul className="space-y-2">
              {officePlace.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] font-medium cursor-pointer hover:text-darkOrange transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="hidden lg:block border" />

        <div className="py-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-3 font-semibold">
          <p className="text-center">
            Copyright &copy; 2006 - {year} Al Nasr Travel | All Reserved
          </p>
          <div className="flex gap-2">
            {socialMedia.map((item) => (
              <SocialMedia key={item.id} icon={item.icon} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
