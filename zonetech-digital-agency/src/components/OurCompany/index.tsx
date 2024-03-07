//images
import OurCompanyImage from "../../assets/images/OurCompany.png";

const OurCompany = () => {
  return (
    <section
      className="pt-14 bg-gradient-to-r from-transparent to-orange-50"
      id="3"
    >
      <div className="container flex flex-col-reverse lg:flex-row gap-12 lg:gap-[89px]">
        <div className="flex-1">
          <img src={OurCompanyImage} alt="" />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark">
            Culture of <span className="text-yellow">Our Company</span>
          </h1>

          <p className="text-[14px] leading-5 md:text-[18px] md:leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <p className="text-[14px] leading-5 md:text-[18px] md:leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </section>
  );
};
export default OurCompany;
