// Client/src/components/Footer.jsx
import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-200 text-gray-500">
        <div>
          <img src={assets.Logo} className="w-34 md:w-32" alt="Logo" />

          <p className="max-w-[410px] mt-6">
            DailyDrop delivers fresh groceries and everyday essentials straight
            to your doorstep. Enjoy quick, convenient, and reliable shopping
            with exclusive offers and top-quality products.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright {new Date().getFullYear()} © DailyDrop All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
