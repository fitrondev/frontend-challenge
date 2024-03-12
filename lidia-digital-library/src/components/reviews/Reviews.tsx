import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import Card from "../card/Card";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Designer",
    review:
      "Engaging plot, vivid characters; a captivating read that lingers in your thoughts.",
    img: p1,
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "Developer",
    review:
      "Thought-provoking narrative and rich prose. A must-read for any avid book lover!",
    img: p2,
  },
  {
    id: 3,
    name: "Sam Doe",
    job: "Manager",
    review:
      "Immersive storytelling! An enriching literary experience worth savoring and sharing.",
    img: p3,
  },
];

const Reviews = () => {
  return (
    <section className="py-[100px] lg:py-[200px]">
      <div className="container space-y-10 lg:space-y-[90px]">
        <div>
          <h1 className="text-[18px] font-bold uppercase tracking-[9.5%] text-primary">
            Reviews
          </h1>

          <h2 className="text-[30px] sm:text-[48px] leading-[65px] text-black font-extrabold">
            • Reviews of Others
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 lg:gap-0">
          {reviews.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              job={item.job}
              review={item.review}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
