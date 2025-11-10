import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";

const MainBanner = () => {
  const { navigate } = useAppContext();

  return (
    <div className="relative">
      <img
        src={assets.Main_Banner}
        alt="Main Banner"
        className="w-full hidden md:block"
      />

      <img
        src={assets.Main_Banner_Small}
        alt="Main Banner Small"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          From Our Farms to Your Home, Always Fresh!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Button
            text={
              <span className="flex items-center gap-2">
                Shop Now <ArrowRight className="md:hidden text-white size-5" />
              </span>
            }
            onClick={() => navigate("/products")}
            className="px-7 md:px-9"
            variant="primary"
          />

          <Button
            text={
              <span className="flex items-center gap-2">
                Explore deals <ArrowRight className="text-black size-5" />
              </span>
            }
            onClick={() => navigate("/products")}
            type="secondary"
            className="hidden md:flex px-7"
            variant="text"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
