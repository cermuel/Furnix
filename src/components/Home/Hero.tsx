//@ts-ignore
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen bg-hero bg-cover bg-center flex items-center md:px-40 px-4">
      <div className="md:w-[600px] w-full">
        <h1 className="md:text-6xl text-4xl font-extrabold">
          Discover the Perfect Furniture Pieces for Your Home
        </h1>
        <p className="text-gray-700 font-medium my-4">
          Experience Quality Craftsmanship and Timeless <br /> Designs for Every
          Room in Your Home.
        </p>
        <Link
          to={"/shop"}
          className="rounded-md bg-pry text-white font-semibold py-3 px-7"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Hero;
