import { FiSearch } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const featuresImg = [
  {
    id: 1,
    img: <FiSearch className="w-11 h-11 text-white" />,
    title: "Search Book",
    desc: "Effortlessly find your next read with our powerful and intuitive book search.",
  },
  {
    id: 2,
    img: <LuMessageCircle className="w-11 h-11 text-white" />,
    title: "Review book",
    desc: "Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly.",
  },
  {
    id: 3,
    img: <FaRegHeart className="w-11 h-11 text-white" />,
    title: "Wishlist book",
    desc: "Curate your literary dreams–wishlist books  for future adventures and discoveries.",
  },
];

const Features = () => {
  return (
    <section className="py-[100px] lg:py-[200px]">
      <div className="container space-y-10 lg:space-y-[90px]">
        <div>
          <h1 className="text-[18px] font-bold uppercase tracking-[9.5%] text-primary">
            Features
          </h1>

          <h2 className="text-[30px] sm:text-[48px] leading-[65px] text-black font-extrabold">
            • What You Can Do?
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 sm:gap-0">
          {featuresImg.map((item) => (
            <div
              key={item.id}
              className="w-[220px] lg:w-[280px] lg:h-[270px] flex flex-col items-center justify-center gap-5"
            >
              <div className="w-[80px] h-[80px] lg:w-[101px] lg:h-[101px] bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
                {item.img}
              </div>
              <h1 className="text-[20px] lg:text-[24px] font-bold text-black">
                {item.title}
              </h1>
              <p className="text-base lg:font-medium text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
