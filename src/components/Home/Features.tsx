import feature1 from "../../assets/images/feature1.svg";
import feature2 from "../../assets/images/feature2.svg";
import feature3 from "../../assets/images/feature3.svg";
import feature4 from "../../assets/images/feature4.svg";

const Features = () => {
  return (
    <section className="w-full flex max-md:gap-20 items-center justify-around flex-wrap my-20">
      <div className="md:w-[220px] w-full flex flex-col items-center">
        <img
          src={feature1}
          alt="Delivery"
          className="hover:scale-125 duration-300 w-[50px]"
        />
        <h1 className="font-semibold mt-6 text-center md:text-xl text-lg text-gray-800">
          Fast & Free Delivery
        </h1>
      </div>
      <div className="md:w-[220px] w-full flex flex-col items-center">
        <img
          src={feature2}
          alt="Payment"
          className="hover:scale-125 duration-300 w-[50px]"
        />
        <h1 className="font-semibold mt-6 text-center md:text-xl text-lg text-gray-800">
          Secure Payment
        </h1>
      </div>
      <div className="md:w-[220px] w-full flex flex-col items-center">
        <img
          src={feature3}
          alt="money"
          className="hover:scale-125 duration-300 w-[50px]"
        />
        <h1 className="font-semibold mt-6 text-center md:text-xl text-lg text-gray-800">
          Money Back Guarantee
        </h1>
      </div>
      <div className="md:w-[220px] w-full flex flex-col items-center">
        <img
          src={feature4}
          alt="support"
          className="hover:scale-125 duration-300 w-[50px]"
        />
        <h1 className="font-semibold mt-6 text-center md:text-xl text-lg text-gray-800">
          Online Support
        </h1>
      </div>
    </section>
  );
};

export default Features;
