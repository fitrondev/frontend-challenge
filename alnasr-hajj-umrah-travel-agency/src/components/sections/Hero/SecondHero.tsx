// image
import Hero2 from "../../../assets/Hero2.jpg";
import Hero21 from "../../../assets/Hero21.png";
import P1 from "../../../assets/Profile1.jpg";
import P2 from "../../../assets/Profile2.jpg";

// icons
import { FaStar } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaTicketSimple, FaHotel } from "react-icons/fa6";
import { GrVisa } from "react-icons/gr";

// components
import { Button } from "../../common";

const SecondHero = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container lg:h-[550px] flex flex-col lg:flex-row-reverse gap-10 lg:gap-2">
        <div className="flex-[1.3] flex flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] sm:text-center lg:text-start">
            A Wonderful Agency To Fulfill your Dreams
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] lg:leading-8 font-semibold sm:text-center lg:text-start">
            The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
            have been trusted since 2006 and have obtained a license from SAUDI
            ARABIA to become this travel agency.
          </p>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <div className="w-7 h-7 bg-lightGreen flex items-center justify-center">
                <IoAirplane className="w-5 h-5 text-darkGreen" />
              </div>

              <p className="text-base sm:text-[24px] sm:font-semibold">
                Flight Jakarta Saudi - Saudi Jakarta
              </p>
            </div>

            <div className="inline-flex items-center gap-2">
              <div className="w-7 h-7 bg-lightGreen flex items-center justify-center">
                <FaTicketSimple className="w-5 h-5 text-darkGreen" />
              </div>

              <p className="text-base sm:text-[24px] sm:font-semibold">
                Tickets are included in the cost
              </p>
            </div>

            <div className="inline-flex items-center gap-2">
              <div className="w-7 h-7 bg-lightGreen flex items-center justify-center">
                <FaHotel className="w-5 h-5 text-darkGreen" />
              </div>

              <p className="text-base sm:text-[24px] sm:font-semibold ">
                Comfortable hotel with a rating of 4
              </p>
            </div>

            <div className="inline-flex items-center gap-2">
              <div className="w-7 h-7 bg-lightGreen flex items-center justify-center">
                <GrVisa className="w-5 h-5 text-darkGreen" />
              </div>

              <p className="text-base sm:text-[24px] sm:font-semibold">
                We cover the Visa Fee and it's Included
              </p>
            </div>
          </div>

          <div className="flex sm:items-center sm:justify-center lg:items-start lg:justify-start gap-5">
            <Button variant="btn__primary" onClick={() => {}}>
              Contact Us
            </Button>

            <Button variant="btn__secondary" onClick={() => {}}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex-1 relative pb-8 flex items-center lg:items-start justify-center lg:justify-start">
          <div className="w-full sm:w-[500px] lg:w-[400px] sm:h-[600px] lg:h-full">
            <img
              src={Hero2}
              alt="mekkah madinah saudi arabia"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="hidden absolute top-5 right-0 p-2 pr-8 bg-white lg:flex items-center justify-center gap-8 border border-darkOrange shadow-lg rounded-lg">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={P1}
                alt=""
                className="w-[70px] h-[70px] rounded-full object-cover border-2 border-blue-500"
              />
            </div>

            <div className="text-[12px] font-semibold leading-5 space-y-2">
              <h3>Ali Qualadeini</h3>
              <div className="inline-flex items-center gap-5">
                <FaStar className="w-5 h-5 text-yellow-500" />
                <p className="text-base font-bold">4.9</p>
              </div>
            </div>
          </div>

          <div className="hidden absolute w-[230px] lg:bottom-24 right-14 p-2 pr-2 bg-white lg:flex items-center justify-center gap-8 border border-darkOrange shadow-lg rounded-lg">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={P2}
                alt=""
                className="w-[70px] h-[70px] rounded-full object-cover border-2 border-blue-500"
              />
            </div>

            <div className="text-[12px] font-semibold leading-5 space-y-2">
              <h3>Mohammad Qassem</h3>
              <div className="inline-flex items-center gap-5">
                <FaStar className="w-5 h-5 text-yellow-500" />
                <p className="text-base font-bold">4.8</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-0 left-16 py-2 px-4 bg-white shadow-lg rounded-lg">
            <div>
              <img src={Hero21} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondHero;
