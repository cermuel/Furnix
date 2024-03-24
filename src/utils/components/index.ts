import { NavLinkType, NewsCardType } from "../../types/components";
// import news1 from "../../assets/images/new1.webp";
// import news2 from "../../assets/images/new2.webp";
// import news3 from "../../assets/images/new3.webp";

import news1 from "././../../assets/images/new1.webp";
import news2 from "././../../assets/images/news2.webp";
import news3 from "././../../assets/images/news3.webp";

export const navLinks: NavLinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const newCards: NewsCardType[] = [
  {
    title: "Seating Centre",
    image: news1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet commodi cupiditate facere pariatur minus exercitationem ea ab ex non?",
    author: "Samuel Ngene",
    date: "Sep 14th, 2005",
  },
  {
    title: "Creative Water Features",
    image: news2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet commodi cupiditate facere pariatur minus exercitationem ea ab ex non?",
    author: "P.Foden",
    date: "April 29th, 2023",
  },
  {
    title: "10 Colored Garden Seats",
    image: news3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet commodi cupiditate facere pariatur minus exercitationem ea ab ex non?",
    author: "Stixx",
    date: "March 12th, 2024",
  },
];
