import { useState } from "react";
import { CorouselData } from "../../constants/CorouselData";

// components
import TestimonialsCard from "../Card/TestimonialsCard";
import Corousel from "../Corousel";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === CorouselData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(CorouselData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className="pt-14 pb-5 bg-gradient-to-r from-transparent to-orange-50"
      id="3"
    >
      <div className="container space-y-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark">
            Case Studies <span className="text-yellow">and Testimonials</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="flex gap-[89px] ">
          <div className="flex-1 flex items-center">
            <div className="w-[500px] h-auto space-y-8">
              <h3 className="text-[36px] text-blueDark font-semibold">
                What They Say ?
              </h3>

              <div className="text-[18px] space-y-10">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 h-[660px] px-7">
            <Corousel
              next={next}
              prev={prev}
              currentIndex={currentIndex}
              Images={CorouselData}
            />
            <TestimonialsCard
              currentIndex={currentIndex}
              CorouselData={CorouselData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
