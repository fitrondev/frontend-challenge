import { FaStar } from "react-icons/fa6";
import AccomadationSlider from "./AccomadationSlider";
const Accomodation = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-[80px]">
        <div className="lg:w-[420px] space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">
            Airways Accomadation
          </h2>
          <p className="text-xl lg:text-2xl font-semibold">
            We cooperate with several airlines for Umrah and Hajj
          </p>
          <div className="max-w-fit py-2 px-3 md:py-3 md:px-5 bg-lightGreen inline-flex items-center gap-2 rounded-full">
            <FaStar className="w-4 h-4 text-yellow-400" />
            <span className="text-base lg:text-[20px] text-darkGreen font-medium ">
              5.0 Rating
            </span>
          </div>
        </div>

        <AccomadationSlider />
      </div>
    </section>
  );
};
export default Accomodation;
