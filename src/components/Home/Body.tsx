//@ts-ignore
import React, { useEffect, useRef, useState } from "react";
import { NewsCardType, ProductType } from "../../types/components";
import ProductCard from "../shared/ProductCard";
import Features from "./Features";
import img from "../../assets/images/img1.webp";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { newCards } from "../../utils/components";

const Body = ({ products }: { products: ProductType[] }) => {
  const categories = ["", "Chairs", "Tables", "Couches", "Beds"];
  const [activeCategory, setactiveCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.category
      .toLowerCase()
      .includes(activeCategory.toLowerCase());
  });

  return (
    <div className="md:px-40 px-4 bg-[whitesmoke] py-20">
      <h1 className="font-extrabold md:text-4xl text-2xl text-center">
        Featured Products
      </h1>
      <p className="md:text-lg my-1 text-sm text-gray-700 text-center">
        Elevate Your Home with our Handpicked Favorites.
      </p>
      <ul className="w-full flex-wrap flex justify-center gap-4 my-4">
        {categories.map((category: string) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-md text-white text-sm hover:bg-pry duration-500 ${
              category == activeCategory ? "bg-pry" : "bg-black"
            }`}
            onClick={() => setactiveCategory(category)}
          >
            {category == "" ? "All" : category}
          </button>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-7 justify-center">
        {filteredProducts.map((product: ProductType) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </ul>
      <section className="rounded-2xl md:h-[400px] h-96 my-10 bg-white flex">
        <div className="md:w-[50%] w-full px-10 md:px-16 flex flex-col justify-center">
          <h1 className="md:text-4xl text-2xl font-extrabold">
            Creative harmonious living
          </h1>
          <p className="text-gray-700 font-medium my-4">
            Furniq Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <div className="mt-2">
            <Link
              to={"/shop"}
              className="rounded-md bg-pry text-white font-semibold py-3 px-7"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <img
          src={img}
          className="rounded-r-2xl bg-contain w-[50%] max-md:hidden"
          alt=""
        />
      </section>
      <Features />
      <section>
        <h1 className="font-extrabold md:text-4xl text-2xl text-center">
          Our Latest News
        </h1>
        <p className="md:text-lg my-1 text-sm text-gray-700 text-center">
          Latest trends and inspiration in interior design.
        </p>
        <div className="flex justify-center gap-6 flex-wrap mt-10">
          {newCards.map((news: NewsCardType) => (
            <NewsCard props={news} key={news.date} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
