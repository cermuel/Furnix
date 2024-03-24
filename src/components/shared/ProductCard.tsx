import { useRef } from "react";
import { ProductType } from "../../types/components";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import gsap from "gsap";

const ProductCard = ({ product }: { product: ProductType }) => {
  const eye = useRef(null);
  const img = useRef(null);

  const enter = () => {
    gsap.to(img.current, {
      scale: 1.1,
      borderTopLeftRadius: "16px",
      filter: "brightness(30%)",
    });
    gsap.to(eye.current, {
      opacity: 1,
    });
  };
  const leave = () => {
    gsap.to(img.current, {
      scale: 1,
      borderTopLeftRadius: "16px",
      filter: "brightness(100%)",
    });
    gsap.to(eye.current, {
      opacity: 0,
    });
  };
  return (
    <li className="md:w-[340px] w-full rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white h-[300px] my-4">
      <div
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="relative  overflow-hidden h-[67%] rounded-t-2xl w-full"
      >
        <img
          ref={img}
          src={product.image}
          alt={product.name}
          className="rounded-t-2xl object-cover brightness-[100%] w-full h-full "
        />
        <Link
          id="eye"
          ref={eye}
          className="absolute top-[50%] opacity-0 left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl text-white"
          to={"/shop/" + product._id}
        >
          <IoEye />
        </Link>
      </div>
      <div className="w-full h-[33%] flex justify-between items-center p-4">
        <div>
          <h1 className="font-semibold">{product.name}</h1>
          <h2 className="font-bold text-lg text-pry">${product.price}</h2>
        </div>
        <button className="text-lg w-9 h-9 flex justify-center items-center bg-pry rounded-full text-white">
          <IoMdCart />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
