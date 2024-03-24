import { useNavigate } from "react-router-dom";
import { NewsCardType } from "../../types/components";

const NewsCard = ({ props }: { props: NewsCardType }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[330px] h-[480px] rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img
        src={props.image}
        className="h-[45%] rounded-t-2xl w-full object-cover"
        alt=""
      />
      <div className="flex flex-col px-4 py-6 gap-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p>
          {props.date} by{" "}
          <a href="" className="text-pry text-sm font-semibold">
            {props.author}
          </a>
        </p>
        <p className="text-sm">{props.text}</p>
        <div>
          <button
            onClick={() => navigate("/about")}
            className="bg-pry mt-4 font-semibold text-white rounded-md px-6 uppercase py-2"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
