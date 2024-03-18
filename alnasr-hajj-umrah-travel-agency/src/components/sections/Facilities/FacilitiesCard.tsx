import { Card } from "../../ui";
import { IconType } from "react-icons";

type FacilitiesCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const FacilitiesCard: React.FC<FacilitiesCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="w-[320px] sm:w-[290px] p-4">
      <div className="flex justify-between gap-4">
        <div className="p-3 bg-lightGreen flex items-center justify-center rounded-lg">
          <Icon className="w-7 h-7 text-darkGreen" />
        </div>

        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
    </Card>
  );
};
export default FacilitiesCard;
