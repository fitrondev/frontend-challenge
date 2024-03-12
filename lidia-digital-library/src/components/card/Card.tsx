type CardProps = {
  img: string;
  review?: string;
  name?: string;
  job?: string;
};

const Card: React.FC<CardProps> = ({ img, review, name, job }) => {
  return (
    <div className="w-[320px] h-[405px] lg:w-[350px] lg:h-[450px] bg-white p-10 shadow-xl lg:shadow-2xl flex flex-col items-center gap-8">
      <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full ">
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-center space-y-6 lg:space-y-[35px]">
        <p className="lg:w-[270px] lg:text-[18px] lg:leading-[30px] font-medium">
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
