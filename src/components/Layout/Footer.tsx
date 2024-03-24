import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineAppShortcut } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1c1c1c] mt-10 w-full flex flex-wrap p-10 gap-4">
      <div className="md:w-[30%] justify-start md:px-20 px-5 w-full flex flex-col gap-4">
        <h1 className="text-2xl text-pry font-extrabold">Furnix</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat
          facilis nihil provident sequi voluptas vero dignissimos{" "}
        </p>
        <div>
          <button
            onClick={() => navigate("/about")}
            className="bg-pry mt-4 font-semibold text-white rounded-md px-6 uppercase py-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="md:w-[30%] justify-start md:px-20 px-5 w-full flex flex-col gap-4">
        <h1 className="text-2xl text-white font-extrabold">Links</h1>
        <ul className="flex flex-col gap-2">
          <Link
            to={"/shop"}
            className="text-white hover:text-pry duration-300 hover:underline md:text-lg"
          >
            Shop
          </Link>
          <Link
            to={"/about"}
            className="text-white hover:text-pry duration-300 hover:underline md:text-lg"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-white hover:text-pry duration-300 hover:underline md:text-lg"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div className="md:w-[30%] justify-start md:px-20 px-5 w-full flex flex-col gap-4">
        <h1 className="text-2xl text-white font-extrabold">Socials</h1>
        <ul className="flex gap-4">
          <a
            target="blank"
            href={"https://twitter.com/cermuelTECH"}
            className="text-white hover:text-pry hover:scale-125 duration-300 md:text-lg"
          >
            <FaTwitter />
          </a>
          <a
            target="blank"
            href={"https://instagram.com/cermuel"}
            className="text-white hover:text-pry hover:scale-125  duration-300 md:text-lg"
          >
            <FaInstagram />
          </a>
          <a
            target="blank"
            href={"https://cermuel.vercel.app"}
            className="text-white hover:text-pry hover:scale-125  duration-300 md:text-lg"
          >
            <MdOutlineAppShortcut />
          </a>
        </ul>
      </div>
      <h1 className="w-full tetx-center text-center text-white text-lg mt-10 max-md:hidden">
        Copyright © {new Date().getFullYear()} All Rights Reserved | This
        template is made by{" "}
        <a
          href="https://cermuel.cvercel.app"
          target="blank"
          className="hover:underline hover:text-pry duration-300"
        >
          CERMUEL
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
