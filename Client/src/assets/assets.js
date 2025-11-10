import Logo from "./Logo.png";
import Delivery_Truck from "./Delivery_Truck.png";
import Leaf from "./Leaf.png";
import Coin from "./Coin.png";
import Box_Icon from "./Box_Icon.png";
import Trust from "./Trust.png";
import Main_Banner from "./Main_Banner.png";
import Main_Banner_Small from "./Main_Banner_Small.png";
import Bottom_Banner from "./Bottom_Banner.png";
import Bottom_Banner_Small from "./Bottom_Banner_Small.png";
import Add_Address_Image from "./Add_Address_Image.png";

import Fruits_Image from "../assets/Fruits_Image.png";
import Vegetables_Image from "../assets/Vegetables_Image.png";
import Dairy_Image from "../assets/Dairy_Image.png";
import Bakery_Image from "../assets/Bakery_Image.png";
import Meat_Seafood_Image from "../assets/Meat_Seafood_Image.png";
import Beverages_Image from "../assets/Beverages_Image.png";
import Snacks_Image from "../assets/Snacks_Image.png";
import Grains_Rice_Image from "../assets/Grains_Rice_Image.png";
import Oils_Sauces_Image from "../assets/Oils_Sauces_Image.png";
import Personal_Care_Image from "../assets/Personal_Care_Image.png";
import Instant_Food_Image from "../assets/Instant_Food_Image.png";
import Spices_Herbs_Image from "../assets/Spices_Herbs_Image.png";

export const assets = {
  Logo,
  Delivery_Truck,
  Leaf,
  Coin,
  Trust,
  Main_Banner,
  Main_Banner_Small,
  Bottom_Banner,
  Bottom_Banner_Small,
  Add_Address_Image,
  Box_Icon,
};

export const categories = [
  {
    text: "Fresh Fruit",
    path: "Fruit",
    image: Fruits_Image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Vegetables",
    path: "Vegetables",
    image: Vegetables_Image,
    bgColor: "#E0F7FA",
  },
  {
    text: "Dairy Products",
    path: "Dairy",
    image: Dairy_Image,
    bgColor: "#FFF3E0",
  },
  {
    text: "Bakery Goods",
    path: "Bakery",
    image: Bakery_Image,
    bgColor: "#F3E5F5",
  },
  {
    text: "Meat & Seafood",
    path: "Meat_Seafood",
    image: Meat_Seafood_Image,
    bgColor: "#FFEBEE",
  },
  {
    text: "Cold Beverages",
    path: "Beverages",
    image: Beverages_Image,
    bgColor: "#E8F5E9",
  },
  {
    text: "Tasty Snacks",
    path: "Snacks",
    image: Snacks_Image,
    bgColor: "#FFF8E1",
  },
  {
    text: "Grains & Rice",
    path: "Grains_Rice",
    image: Grains_Rice_Image,
    bgColor: "#FBE9E7",
  },
  {
    text: "Oils & Sauces",
    path: "Oils_Sauces",
    image: Oils_Sauces_Image,
    bgColor: "#FFF3F3",
  },
  {
    text: "Personal Care",
    path: "Personal_Care",
    image: Personal_Care_Image,
    bgColor: "#E3F2FD",
  },
  {
    text: "Instant Food",
    path: "Instant_Food",
    image: Instant_Food_Image,
    bgColor: "#FFFDE7",
  },
  {
    text: "Spices & Herbs",
    path: "Spices_Herbs",
    image: Spices_Herbs_Image,
    bgColor: "#F1F8E9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: Delivery_Truck,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: Leaf,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: Coin,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: Trust,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];
