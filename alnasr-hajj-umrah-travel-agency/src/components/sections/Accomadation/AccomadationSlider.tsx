import { accomadationLogo } from "../../../constants/data";
import Marquee from "react-fast-marquee";

const AccomadationSlider = () => {
  return (
    <Marquee>
      {accomadationLogo.map((item) => (
        <div key={item.id} className="pr-10">
          <img src={item.img} alt="" className="w-full h-[50px] object-cover" />
        </div>
      ))}
    </Marquee>
  );
};
export default AccomadationSlider;
