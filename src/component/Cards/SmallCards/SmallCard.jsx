import React from "react";
import { FaRegClock } from "react-icons/fa6";

const SmallCard = ({ category, title, author, timeAgo, image, isDarkMode }) => {
  
  return (
    <div className="flex items-center mt-5 pb-6 border-b-2 border-gray-800">
      <div className="flex flex-col gap-2 justify-between w-[100%]">
        <div className="text-purple-600 text-xs font-semibold">
          <h1>{category}</h1>
        </div>
        <div className={isDarkMode ? "text-white" : "text-black"}>
          <p className="hover:cursor-pointer text-lg w-60 transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
            {title}
          </p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-400 font-semibold text-xs">{author}</p>
          <p className="text-gray-400 font-semibold text-xs flex items-center gap-1">
            <FaRegClock /> {timeAgo}
          </p>
        </div>
      </div>
      <div>
        <img className="w-[150px] h-[100px] rounded-full" src={image} alt="Pick 3" />
      </div>
    </div>
  );
};

export default SmallCard;
