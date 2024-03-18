import { IconType } from "react-icons";

type SocialMediaProps = {
  icon: IconType;
  link: string;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ icon: Icon, link }) => {
  return (
    <a href={link} className="p-2 bg-gray-200 rounded-xl hover:bg-lightGreen">
      <Icon className="w-5 h-5 text-darkGreen" />
    </a>
  );
};
export default SocialMedia;
