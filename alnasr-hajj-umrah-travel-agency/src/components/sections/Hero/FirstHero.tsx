// image
import Hero1 from "../../../assets/Hero1.jpg";
import P1 from "../../../assets/Profile1.jpg";
import P2 from "../../../assets/Profile2.jpg";

// components
import { Button } from "../../common";

const FirstHero = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container lg:h-[550px] flex flex-col lg:flex-row gap-10 lg:gap-2">
        <div className="flex-[1.5] flex flex-col gap-4 lg:gap-0 lg:justify-between ">
          <div className="max-w-fit py-1 px-5 font-semibold bg-lightGreen text-darkGreen rounded-full">
            <p>No. 1 in Indonesia</p>
          </div>

          <h1 className="lg:w-[620px] text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] sm:text-center lg:text-start">
            Make it easy for your Umrah worship with Al Nasr Travel
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] font-semibold lg:leading-8 sm:text-center lg:text-start">
            Facilitate your Umrah pilgrimage with us, we already have hundreds
            of thousands of customers, you can go for Umrah to Mecca and Medina
          </p>

          <div className="flex sm:items-center sm:justify-center lg:items-start lg:justify-start">
            <Button variant="btn__primary" onClick={() => {}}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex-1 relative pb-8 flex items-center justify-center">
          <div className="sm:w-5/6 sm:h-[600px] lg:h-full">
            <img
              src={Hero1}
              alt="mekkah madinah saudi arabia"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="absolute top-5 right-0 p-2 bg-white flex gap-4 border border-darkOrange shadow-lg rounded-lg">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={P1}
                alt=""
                className="w-[70px] h-[70px] rounded-full object-cover border-2 border-blue-500"
              />
            </div>

            <div className="w-[130px] text-[12px] font-semibold leading-5 space-y-2">
              <p>“Let's worship as good Muslims”.</p>
              <h3>Ali Qualadeini</h3>
            </div>
          </div>

          <div className="absolute bottom-12 lg:bottom-0 left-0 p-2 bg-white flex gap-4 border border-darkOrange shadow-lg rounded-lg">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={P2}
                alt=""
                className="w-[70px] h-[70px] rounded-full object-cover border-2 border-blue-500"
              />
            </div>

            <div className="w-[130px] text-[12px] font-semibold leading-5 space-y-2">
              <p>“The most amazing city of Mecca”.</p>
              <h3>Mohammad Qassem</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirstHero;
