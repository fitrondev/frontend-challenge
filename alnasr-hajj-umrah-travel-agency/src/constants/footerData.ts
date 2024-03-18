import { IconType } from "react-icons";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

type socialMediaType = {
  id: number;
  icon: IconType;
  link: string;
};

export const socialMedia: socialMediaType[] = [
  {
    id: 1,
    icon: RiInstagramFill,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: RiTwitterFill,
    link: "https://www.twitter.com/",
  },
  {
    id: 4,
    icon: RiYoutubeFill,
    link: "https://www.youtube.com/",
  },
];

export const quickLink = [
  {
    id: "#about",
    title: "About Us",
  },

  {
    id: "#flight",
    title: "Flight Accommodation",
  },

  {
    id: "#facilities",
    title: "Facilities",
  },

  {
    id: "#gallery",
    title: "Gallery",
  },
];

export const packageUmrah = [
  {
    id: 1,
    title: "All Nasr Umrah Bronze",
  },
  {
    id: 2,
    title: "All Nasr Umrah Silver",
  },
  {
    id: 3,
    title: "All Nasr Umrah Gold",
  },
  {
    id: 4,
    title: "All Nasr Umrah Priority",
  },
];

export const packageHajj = [
  {
    id: 1,
    title: "All Nasr Hajj Diamond",
  },
  {
    id: 2,
    title: "All Nasr Hajj Platinum",
  },
  {
    id: 3,
    title: "All Nasr Hajj Priority",
  },
];

export const officePlace = [
  {
    id: 1,
    title: "Indonesia",
  },
  {
    id: 2,
    title: "Saudi Arabia",
  },
  {
    id: 3,
    title: "Uni Emirat Arab",
  },
];
