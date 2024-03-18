import Marquee from "react-fast-marquee";
import { testimonialsItem1, testimonialsItem2 } from "../../../constants/data";

// components
import { Card } from "../../ui";
// icons
import { FaStar } from "react-icons/fa6";

const TestimonialsCard = () => {
  return (
    <div className="pt-14 space-y-10">
      <Marquee direction="left" pauseOnHover>
        {testimonialsItem1.map((item) => (
          <Card
            key={item.id}
            className="w-[480px] h-[200px] mx-5 flex gap-[25px]"
          >
            <div className="flex flex-col items-center justify-between">
              <div className="w-28 h-28">
                <img
                  src={item.Img}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>

              <div className="max-w-fit py-1 px-3 bg-lightGreen inline-flex items-center gap-2 rounded-full">
                <FaStar className="w-3 h-3 text-yellow-400" />
                <span className="text-[10px] text-darkGreen font-medium ">
                  {item.rating}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="max-w-fit p-1 px-5 bg-lightGreen inline-flex items-center gap-2 rounded-full">
                <span className="text-sm text-darkGreen font-medium ">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm font-medium">{item.comment}</p>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>

      <Marquee direction="right" pauseOnHover>
        {testimonialsItem2.map((item) => (
          <Card
            key={item.id}
            className="w-[480px] h-[200px] mx-5 flex gap-[25px]"
          >
            <div className="flex flex-col items-center justify-between">
              <div className="w-28 h-28">
                <img
                  src={item.Img}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>

              <div className="max-w-fit py-1 px-3 bg-lightGreen inline-flex items-center gap-2 rounded-full">
                <FaStar className="w-3 h-3 text-yellow-400" />
                <span className="text-[10px] text-darkGreen font-medium ">
                  {item.rating}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="max-w-fit p-1 px-5 bg-lightGreen inline-flex items-center gap-2 rounded-full">
                <span className="text-sm text-darkGreen font-medium ">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm font-medium">{item.comment}</p>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};
export default TestimonialsCard;
