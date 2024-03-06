import ServicesCard from "../Card/ServicesCard";

// images
import Shopify from "../../assets/images/Shopify.svg";
import Rocket from "../../assets/images/Rocket.svg";

const OurServices = () => {
  return (
    <section
      className="pt-16 pb-5 bg-gradient-to-r from-transparent to-orange-50"
      id="2"
    >
      <div className="container space-y-14 sm:space-y-28 lg:space-y-36">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark">
            Our <span className="text-yellow">Services</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-[100px]">
          <ServicesCard
            image={Shopify}
            backgorund="bg-blueDark"
            title="Shopify Development"
          />
          <ServicesCard
            image={Rocket}
            backgorund="bg-yellow"
            title="Digital Marketing"
          />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
