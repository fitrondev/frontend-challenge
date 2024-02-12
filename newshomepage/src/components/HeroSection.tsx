// img file
import imgWeb from "../assets/images/image-web-3-desktop.jpg";
import imgMobile from "../assets/images/image-web-3-mobile.jpg";

const HeroSection = () => {
  return (
    <section className="lg:flex-[3] max-h-full">
      <div>
        <img src={imgWeb} alt="" className="hidden md:block" />
        <img src={imgMobile} alt="" className="block md:hidden" />
      </div>

      <div className="my-7 lg:my-5 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10">
        <div className="flex-1 max-w-[350px]">
          <h1 className="text-[45px] lg:text-[55px] leading-[55px] font-[900] text-Verydarkblue">
            The Bright Future of Web 3.0?
          </h1>
        </div>

        <div className="flex-1 flex flex-col gap-5 max-w-[350px]">
          <p className="text-Verydarkblue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="max-w-max px-14 py-4 bg-Softred uppercase text-white tracking-[2px] lg:mt-8">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
