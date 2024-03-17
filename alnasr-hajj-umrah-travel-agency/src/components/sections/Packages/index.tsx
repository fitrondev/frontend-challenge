import { packagesItem } from "../../../constants/data";

// components
import { Card } from "../../ui";
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <section className="py-7 lg:py-[55px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="lg:w-[825px] text-[28px] leading-8 lg:text-[55px] font-bold lg:leading-[70px] text-center">
            Al Nasr Special Umrah and Hajj Packages
          </h1>

          <p className="lg:w-[640px] lg:text-[24px] font-semibold lg:leading-8 text-center">
            Choose your package according to your needs, guaranteed cheap and
            complete
          </p>
        </div>

        <div className="pt-14 flex flex-wrap items-center justify-center md:items-start md:justify-between gap-y-8 lg:gap-y-[50px]">
          {packagesItem.map((item) => (
            <PackageCard
              key={item.id}
              img={item.img}
              type={item.type}
              offer={item.offer}
              title={item.title}
              price={item.price}
              icon={item.icon}
            />
          ))}

          <Card className="hidden w-[360px] h-[510px] md:w-[319px] lg:w-[360px] lg:h-[510px] md:flex items-center justify-center">
            <div className="font-kufam text-[20px] font-semibold text-darkGreen">
              Cooming Soon Program
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Packages;
