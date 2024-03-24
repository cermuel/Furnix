//@ts-ignore
import React, { useEffect, useState } from "react";
import Furnixlayout from "../components/Layout/Furnixlayout";
import Hero from "../components/Home/Hero";
import Body from "../components/Home/Body";
import { Toaster } from "react-hot-toast";
import { getProducts } from "../functions/Products";
import { ProductType } from "../types/components";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts({ setProducts });
  }, []);

  if (products.length > 0) {
    return (
      <Furnixlayout>
        <Toaster />
        <Hero />
        <Body products={products} />
      </Furnixlayout>
    );
  } else {
    return (
      <div className="w-screen h-screen flex items-center justify-center TEXT-XL">
        NO DATA
      </div>
    );
  }
};

export default Home;
