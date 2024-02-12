// img file
import news1 from "../assets/images/image-retro-pcs.jpg";
import news2 from "../assets/images/image-top-laptops.jpg";
import news3 from "../assets/images/image-gaming-growth.jpg";

const Articles = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center my-10 lg:my-10 gap-4">
      <div className="w-[330px] flex items-center justify-between gap-5">
        <div>
          <img src={news1} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-Darkgrayishblue text-[32px] font-bold">01</span>
          <h1 className="font-bold text-Verydarkblue text-[15px] hover:text-Softred cursor-pointer">
            Reviving Retro PCs
          </h1>
          <p className="">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="w-[330px] flex items-center justify-between gap-5">
        <div>
          <img src={news2} alt="" className="w-[160px] lg:w-[170px]  h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-Darkgrayishblue text-[32px] font-bold">02</span>
          <h1 className="font-bold text-Verydarkblue text-[15px] hover:text-Softred cursor-pointer">
            Top 10 Laptops of 2022
          </h1>
          <p className="">Our best pick for various needs and budgets.</p>
        </div>
      </div>
      <div className="w-[330px] flex items-center justify-between gap-5">
        <div>
          <img src={news3} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-Darkgrayishblue text-[32px] font-bold">03</span>
          <h1 className="font-bold text-Verydarkblue text-[15px] hover:text-Softred cursor-pointer">
            The Growth of Gaming
          </h1>
          <p className="">How the pandemic was sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};
export default Articles;
