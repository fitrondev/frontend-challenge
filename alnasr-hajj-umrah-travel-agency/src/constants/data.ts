export const navLinks = [
  {
    id: "#home",
    title: "Home",
  },

  {
    id: "#about",
    title: "About Us",
  },

  {
    id: "#packages",
    title: "Packages",
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

import Pack1 from "../assets/Pack1.jpg";
import Pack2 from "../assets/Pack2.jpg";
import Pack3 from "../assets/Pack3.jpg";

// icons
import { IoAirplane } from "react-icons/io5";
import { FaTicketSimple, FaHotel } from "react-icons/fa6";
import { GrVisa } from "react-icons/gr";
import { MdFoodBank } from "react-icons/md";
import { IconType } from "react-icons";

enum PackageType {
  Bronze = "Bronze",
  Silver = "Silver",
  Gold = "Gold",
  Diamond = "Diamond",
  Platinum = "Platinum",
}

type PackageItem = {
  id: number;
  img: string;
  type: PackageType;
  offer: string;
  title: string;
  price: string;
  icon?: IconType[];
};

export const packagesItem: PackageItem[] = [
  {
    id: 1,
    img: Pack1,
    type: PackageType.Bronze,
    offer: "Best Seller",
    title: "Al Nasr Special Umrah 9 Days",
    price: "1,950",
    icon: [IoAirplane, FaTicketSimple, FaHotel, GrVisa],
  },
  {
    id: 2,
    img: Pack2,
    type: PackageType.Silver,
    offer: "Best Seller",
    title: "Al Nasr Special Umrah 17 Days",
    price: "2,750",
    icon: [IoAirplane, FaTicketSimple, FaHotel, GrVisa],
  },
  {
    id: 3,
    img: Pack3,
    type: PackageType.Gold,
    offer: "Long Trip",
    title: "Al Nasr Special Umrah 25 Days",
    price: "4,250",
    icon: [IoAirplane, FaTicketSimple, FaHotel, GrVisa, MdFoodBank],
  },
  {
    id: 4,
    img: Pack1,
    type: PackageType.Platinum,
    offer: "Best Seller",
    title: "Al Nasr Special Umrah 30 Days",
    price: "20,000",
    icon: [IoAirplane, FaTicketSimple, FaHotel, GrVisa, MdFoodBank],
  },
  {
    id: 5,
    img: Pack2,
    type: PackageType.Diamond,
    offer: "Special Offering",
    title: "Al Nasr Special Umrah 30 Days",
    price: "25,000",
    icon: [IoAirplane, FaTicketSimple, FaHotel, GrVisa, MdFoodBank],
  },
];

import Garuda from "../assets/Garuda.svg";
import Qatar from "../assets/Qatar.svg";
import Emirates from "../assets/Emirates.svg";
import Saudi from "../assets/Saudi.svg";
import LionAir from "../assets/LionAir.svg";

export const accomadationLogo = [
  {
    id: 1,
    img: Garuda,
  },
  {
    id: 2,
    img: Qatar,
  },
  {
    id: 3,
    img: Emirates,
  },
  {
    id: 4,
    img: Saudi,
  },
  {
    id: 5,
    img: LionAir,
  },
];
