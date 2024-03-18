import Gallery1 from "../../../assets/Gallery1.jpg";
import Gallery2 from "../../../assets/Gallery2.jpg";
import Gallery3 from "../../../assets/Gallery3.jpg";
import Gallery4 from "../../../assets/Gallery4.jpg";
import Gallery5 from "../../../assets/Gallery5.jpg";
import Gallery6 from "../../../assets/Gallery6.jpg";

const Gallery = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="lg:w-[825px] text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] text-center">
            Gallery Footage In Saudi Arabia
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] font-semibold lg:leading-8 text-center">
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>

        <div className="relative pt-14">
          <div className="flex flex-wrap justify-between gap-y-5">
            <img
              src={Gallery1}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
            <img
              src={Gallery2}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
            <img
              src={Gallery3}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
            <img
              src={Gallery4}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
            <img
              src={Gallery5}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
            <img
              src={Gallery6}
              alt=""
              className="w-full h-[300px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover"
            />
          </div>
          <div className="absolute right-10 bottom-10 lg:right-14 lg:bottom-10 py-2 px-5 text-white bg-darkGreen bg-opacity-80 rounded-md cursor-pointer select-none hover:bg-opacity-100 transition-all duration-300 ease-in-out">
            Show More
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
