import Card from "./Card";
type ServicesCardProps = {
  image: string;
  backgorund?: string;
  title: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  image,
  backgorund,
  title,
}) => {
  return (
    <Card className="w-full h-[290px] md:w-[463px] md:h-[330px] flex flex-col items-center gap-5 border-2 border-solid border-[#f3f4f5] pt-12 lg:pt-[88px] px-8 shadow-sm lg:shadow-lg rounded-xl">
      <div
        className={`absolute -top-[35px] left-[120px] md:-top-[51px] md:left-[181px] ${backgorund} w-[70px] h-[70px] md:w-[100px] md:h-[100px] flex justify-center items-center rounded-full`}
      >
        <img src={image} alt="" className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="text-center space-y-5">
        <h3 className="text-[18px] lg:text-[24px] font-semibold text-blueDark">
          {title}
        </h3>
        <p className="text-[14px] lg:text-base">
          “ Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem. “
        </p>
      </div>

      <div>
        <button className="btn__secondary">Read More</button>
      </div>
    </Card>
  );
};
export default ServicesCard;
