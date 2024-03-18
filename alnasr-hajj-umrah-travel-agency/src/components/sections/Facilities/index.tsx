import { facilitiesItem } from "../../../constants/data";
import FacilitiesCard from "./FacilitiesCard";

const Facilities = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="lg:w-[825px] text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] text-center">
            Facilities We Provide For You
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] font-semibold lg:leading-8 text-center">
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>

        <div className="pt-14 flex flex-wrap items-center justify-center sm:items-start sm:justify-between md:justify-evenly lg:justify-between gap-y-3 md:gap-y-8">
          {facilitiesItem.map((item) => (
            <FacilitiesCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Facilities;
