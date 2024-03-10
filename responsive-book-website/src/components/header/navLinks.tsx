// icons
import {
  RiHomeLine,
  RiPriceTag3Line,
  RiBookmarkLine,
  RiMessage3Line,
  RiBook3Line,
} from "@remixicon/react";

type navLinkType = {
  id: string;
  icon?: JSX.Element;
  title: string;
};

export const navLinks: navLinkType[] = [
  {
    id: "#home",
    icon: <RiHomeLine className="w-5 h-5" />,
    title: "Home",
  },
  {
    id: "#featured",
    icon: <RiBook3Line className="w-5 h-5" />,
    title: "Featured",
  },
  {
    id: "#discount",
    icon: <RiPriceTag3Line className="w-5 h-5" />,
    title: "Discount",
  },
  {
    id: "#newbooks",
    icon: <RiBookmarkLine className="w-5 h-5" />,
    title: "New Books",
  },
  {
    id: "#testimonial",
    icon: <RiMessage3Line className="w-5 h-5" />,
    title: "Testimonial",
  },
];
