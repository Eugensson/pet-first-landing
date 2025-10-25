import img1 from "@/public/assets/pets/1.jpg";
import img2 from "@/public/assets/pets/2.jpg";
import img3 from "@/public/assets/pets/3.jpg";
import img4 from "@/public/assets/pets/4.jpg";
import img5 from "@/public/assets/pets/5.jpg";
import img6 from "@/public/assets/pets/6.jpg";
import img7 from "@/public/assets/pets/7.jpg";
import img8 from "@/public/assets/pets/8.jpg";
import img9 from "@/public/assets/pets/9.jpg";
import img10 from "@/public/assets/pets/10.jpg";
import img11 from "@/public/assets/pets/11.jpg";
import img12 from "@/public/assets/pets/12.jpg";
import service1Img from "@/public/assets/services/service-icon1.svg";
import service2Img from "@/public/assets/services/service-icon2.svg";
import service3Img from "@/public/assets/services/service-icon3.svg";

import { NavItem, Pet, Service, Social } from "@/types";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

export const navItems: NavItem[] = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const petsData: Pet[] = [
  {
    id: "1",
    category: "dog",
    name: "Buddy",
    image: img1,
  },
  {
    id: "2",
    category: "reptiles",
    name: "Spike",
    image: img2,
  },
  {
    id: "3",
    category: "rabbit",
    name: "Snowball",
    image: img3,
  },
  {
    id: "4",
    category: "cat",
    name: "Luna",
    image: img4,
  },
  {
    id: "5",
    category: "hamster",
    name: "Nibbles",
    image: img5,
  },
  {
    id: "6",
    category: "parrot",
    name: "Kiwi",
    image: img6,
  },
  {
    id: "7",
    category: "rabbit",
    name: "Clover",
    image: img7,
  },
  {
    id: "8",
    category: "dog",
    name: "Max",
    image: img8,
  },
  {
    id: "9",
    category: "guinea pig",
    name: "Peanut",
    image: img9,
  },
  {
    id: "10",
    category: "parrot",
    name: "Rio",
    image: img10,
  },
  {
    id: "11",
    category: "turtle",
    name: "Shelly",
    image: img11,
  },
  {
    id: "12",
    category: "cat",
    name: "Milo",
    image: img12,
  },
];

export const serviceData: Service[] = [
  {
    id: "1",
    title: "Pharmacy",
    description:
      "Our pet pharmacy provides safe, veterinarian-approved medications and supplements to support your animal’s health. We ensure quality care, timely delivery, and expert advice to help your pets stay happy, active, and protected every day.",
    image: service1Img,
  },
  {
    id: "2",
    title: "Breed-specific Haircuts",
    description:
      "Our grooming experts offer stylish, breed-specific haircuts designed to highlight your pet’s natural beauty and comfort. From precise trimming to coat care, we make every grooming session relaxing and tailored to your furry friend’s needs.",
    image: service2Img,
  },
  {
    id: "3",
    title: "Clothes",
    description:
      "We design and offer comfortable, durable, and stylish pet clothing for every season and occasion. From cozy sweaters to rainproof jackets, our collection keeps your pets warm, safe, and looking adorable wherever they go.",
    image: service3Img,
  },
];

export const socialItems: Social[] = [
  {
    label: "Facebook",
    icon: BsFacebook,
    href: "https://www.facebook.com",
  },
  {
    label: "Instagram",
    icon: BsInstagram,
    href: "https://www.instagram.com",
  },
  {
    label: "Twitter X",
    icon: BsTwitterX,
    href: "https://x.com",
  },
];
