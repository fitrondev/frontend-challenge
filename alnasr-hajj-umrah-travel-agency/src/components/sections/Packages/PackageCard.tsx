import { IconType } from "react-icons";

// components
import { Button } from "../../common";
import { Card } from "../../ui";

type PackageCardProps = {
  img: string;
  type: string;
  offer: string;
  title: string;
  price: string;
  icon?: IconType[];
};

const PackageCard: React.FC<PackageCardProps> = ({
  img,
  type,
  offer,
  title,
  price,
  icon,
}) => {
  return (
    <Card className="w-[360px] h-[510px] md:w-[319px] lg:w-[360px] lg:h-[510px] space-y-4">
      <div>
        <img
          src={img}
          alt=""
          className="w-full h-[230px] object-cover rounded-lg"
        />
      </div>

      <div className="relative flex items-center justify-between h-[45px] font-bold">
        <div className="text-darkOrange">{type}</div>
        <div className="absolute -right-5 bg-lightGreen text-darkGreen py-2 px-4 rounded-l-full">
          {offer}
        </div>
      </div>

      <div className="font-bold font-kufam">
        <h3>{title}</h3>
        <p className="text-[20px]">
          ${price}/ <span className="text-darkGreen">Person</span>
        </p>
      </div>

      <div className="inline-flex gap-5">
        {icon?.map((Icon, index) => (
          <div
            key={index}
            className="w-7 h-7 bg-lightGreen flex items-center justify-center"
          >
            <Icon key={index} className="w-5 h-5 text-darkGreen" />
          </div>
        ))}
      </div>

      <div>
        <Button variant="btn__secondary" onClick={() => {}}>
          View Detail
        </Button>
      </div>
    </Card>
  );
};
export default PackageCard;
