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

import {
  MdOutlineSecurity,
  MdHotel,
  MdOutlineCardMembership,
} from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { FaBusSimple } from "react-icons/fa6";
import { GiHeartPlus } from "react-icons/gi";
import { TbVaccine } from "react-icons/tb";

type FacilitiesItem = {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
};

export const facilitiesItem: FacilitiesItem[] = [
  {
    id: 1,
    icon: MdOutlineSecurity,
    title: "Safety & Security",
    desc: "We take care of your security in 24 hours",
  },
  {
    id: 2,
    icon: BsStack,
    title: "Conseling",
    desc: "Provide counseling to stay fit spiritually and religius",
  },
  {
    id: 3,
    icon: FaBusSimple,
    title: "Vehicle In Saudi",
    desc: "Bus and Car Vehicles While in Saudi",
  },
  {
    id: 4,
    icon: GiHeartPlus,
    title: "Health In Saudi",
    desc: "Free Health Facilities for every customer",
  },
  {
    id: 5,
    icon: MdHotel,
    title: "Hostel Rate 5",
    desc: "5 star hotel accommodation every customer",
  },
  {
    id: 6,
    icon: MdFoodBank,
    title: "Food & Drink",
    desc: "Provide food and drinks while in Saudi",
  },
  {
    id: 7,
    icon: MdOutlineCardMembership,
    title: "Membership",
    desc: "Obtain a membership card for each customer",
  },
  {
    id: 8,
    icon: TbVaccine,
    title: "Vaccine",
    desc: "Free meningitis vaccine for all customers",
  },
];

import Testimonial1 from "../assets/Testimonial1.jpg";
import Testimonial2 from "../assets/Testimonial2.jpg";
import Testimonial3 from "../assets/Testimonial3.jpg";
import Testimonial4 from "../assets/Testimonial4.jpg";
import Testimonial5 from "../assets/Testimonial5.jpg";
import Testimonial6 from "../assets/Testimonial6.jpg";
import Testimonial7 from "../assets/Testimonial7.jpg";
import Testimonial8 from "../assets/Testimonial8.jpg";
import Testimonial9 from "../assets/Testimonial9.jpg";
import Testimonial10 from "../assets/Testimonial10.jpg";

type TestimonialsItem = {
  id: number;
  Img: string;
  rating: number;
  badge: string;
  name: string;
  comment: string;
};

export const testimonialsItem1: TestimonialsItem[] = [
  {
    id: 1,
    Img: Testimonial1,
    rating: 4.5,
    badge: "Al Nasr Umrah",
    name: "Nabila Putri",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 2,
    Img: Testimonial6,
    rating: 4.5,
    badge: "Al Nasr Umrah",
    name: "Fahmi Ramadhan",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 3,
    Img: Testimonial2,
    rating: 4.3,
    badge: "Al Nasr Hajj Premium",
    name: "Astari Putri",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 4,
    Img: Testimonial7,
    rating: 4.8,
    badge: "Al Nasr Umrah Premium",
    name: "Ridwan Fauzi",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 5,
    Img: Testimonial3,
    rating: 4.5,
    badge: "Al Nasr Hajj",
    name: "Nabila Putri",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
];

export const testimonialsItem2: TestimonialsItem[] = [
  {
    id: 1,
    Img: Testimonial4,
    rating: 4.5,
    badge: "Al Nasr Umrah",
    name: "Azizah Putri",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 2,
    Img: Testimonial8,
    rating: 4.5,
    badge: "Al Nasr Umrah",
    name: "Affan Syahputra",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 3,
    Img: Testimonial5,
    rating: 4.3,
    badge: "Al Nasr Hajj Premium",
    name: "Alya Syafitri",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 4,
    Img: Testimonial9,
    rating: 4.8,
    badge: "Al Nasr Umrah Premium",
    name: "Hilan Kurniawan",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
  {
    id: 5,
    Img: Testimonial10,
    rating: 4.5,
    badge: "Al Nasr Hajj",
    name: "Saamy Wulan",
    comment:
      "I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
  },
];
