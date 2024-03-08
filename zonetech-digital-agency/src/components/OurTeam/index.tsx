import CorouselTeams from "./CorouselTeams";

const OurTeam = () => {
  return (
    <section className="pt-16">
      <div className="container space-y-10 sm:space-y-14 lg:space-y-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark text-center">
            Our Master <span className="text-yellow">Brains</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <CorouselTeams />
      </div>
    </section>
  );
};
export default OurTeam;
