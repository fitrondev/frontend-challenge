// components
import Card from "./Card";

// images
import Star from "../../assets/images/star.svg";

type TestimonialCardProps = {
  currentIndex: number;
  CorouselData: Array<{
    id: number;
    name: string;
    comment: string;
    image?: string;
  }>;
};

const TestimonialsCard = ({
  currentIndex,
  CorouselData,
}: TestimonialCardProps): React.ReactNode => {
  return (
    <>
      {CorouselData.slice(currentIndex, currentIndex + 1).map((item) => (
        <Card
          key={item.id}
          className="bg-white w-[500px] h-[290px] absolute left-10 -top-[130px] py-10 pl-6 pr-10 space-y-10 rounded-xl shadow-md border-l-[19px] border-yellow z-50"
        >
          <div className="border-l border-dashed border-gray-600 pl-4">
            <p className="text-[18px] leading-8">“ {item.comment} “</p>
          </div>

          <div className="flex justify-between">
            <div className="text-[18px]">
              <h4 className="text-black">{item.name}</h4>
              <p>Customer</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-end">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img key={star} src={Star} alt="" className="h-6 w-6" />
                ))}
              </div>
              <p className="text-[18px]">12 reviews at Yelp</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
export default TestimonialsCard;
