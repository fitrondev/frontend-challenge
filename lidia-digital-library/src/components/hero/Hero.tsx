import HeroImg from "../../assets/images/Hero.png";
import BookHero from "../../assets/images/BookHero.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative pt-5 lg:pt-0">
      <div className="hidden md:block absolute top-[490px] lg:-top-32 right-0 -z-20">
        <img
          src={HeroImg}
          alt=""
          className="md:w-[640px] md:h-[620px] lg:w-[720px] lg:h-[716px] 2xl:w-full 2xl:h-full"
        />
      </div>
      <div className="container flex flex-col md:pt-5 lg:pt-0 lg:flex-row">
        <div className="flex-1 flex flex-col gap-5 sm:items-center lg:items-start lg:justify-between">
          <h1 className="text-[50px] sm:text-[76px] font-extrabold leading-[60px] sm:leading-[89px] lg:leading-[89px] -tracking-[4px] text-heading sm:text-center lg:text-start">
            Search & review your <span className="text-primary">fav book</span>{" "}
            effortlessly
          </h1>

          <p className="sm:w-[500px] sm:text-center lg:text-start">
            Embark on a literary journey like never before with our
            revolutionary library application! Introducing a seamless experience
            that transcends traditional boundaries, where you can effortlessly
            search your favorite books.✨
          </p>

          <div>
            <button className="btn__primary inline-flex items-center gap-2">
              Start Now
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:block md:pt-20 lg:pt-0">
          <img src={BookHero} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
