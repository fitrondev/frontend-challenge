import HeroImg from "../../assets/images/Hero.png";
import BookHero from "../../assets/images/BookHero.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute -top-32 right-0 -z-20">
        <img
          src={HeroImg}
          alt=""
          className="lg:w-[720px] lg:h-[716px] 2xl:w-full 2xl:h-full"
        />
      </div>
      <div className="container flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-[76px] font-extrabold leading-[89px] -tracking-[4px] text-heading">
            Search & review your <span className="text-primary">fav book</span>{" "}
            effortlessly
          </h1>

          <p className="w-[500px]">
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

        <div className="flex-1">
          <img src={BookHero} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
