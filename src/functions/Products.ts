import axios from "axios";
import { Dispatch } from "react";
import toast from "react-hot-toast";
import { ProductType } from "../types/components";

const BASE_URL = "http://localhost:4000";

export const getProducts = async ({
  setProducts,
  setLoading,
}: {
  setProducts: Dispatch<ProductType[]>;
  setLoading?: Dispatch<boolean>;
}) => {
  setLoading && setLoading(true);
  try {
    let products: any[] | any = await axios.get(`${BASE_URL}/api/product`);
    products = products.data.data;
    const mainProducts: ProductType[] = [];
    products.forEach((product: any) => {
      const somt: ProductType = {
        name: product.name,
        _id: product._id,
        description: product.description,
        image: product.image,
        category: product.category,
        price: product.price,
      };
      mainProducts.push(somt);
    });
    setProducts(mainProducts);
    setLoading && setLoading(false);
  } catch (err: any) {
    let message = err.response.data || err.message;
    toast.error(message);
    setLoading && setLoading(false);
  }
};
