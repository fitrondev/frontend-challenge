type CardProps = {
  img: string;
  review?: string;
  name?: string;
  job?: string;
};

const Card: React.FC<CardProps> = ({ img, review, name, job }) => {
  return (
    <div className="w-[350px] h-[450px] bg-white p-10 shadow-2xl flex flex-col items-center gap-8">
      <div className="w-[150px] h-[150px] rounded-full ">
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-center space-y-[35px]">
        <p className="w-[270px] text-[18px] leading-[30px] font-medium">
          {review}
        </p>
        <div className="space-y-5">
          <h3 className="font-medium text-primary">{name}</h3>
          <p className="font-medium text-heading">{job}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
