import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
const Section3small = ({ title, author, timeAgo, image, isDarkMode }) => {
  
  return (
    <div className="flex items-center  mt-2 h-[116px] pb-2  border-gray-500">
      <div className="flex flex-col gap-6 justify-between w-[100%]">
        
        <div className="text-white">
          <p className="hover:cursor-pointer text-md line-clamp-2 w-60 transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
            {title}
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-400 font-semibold text-xs">{author}</p>
          <p className="text-gray-400 font-semibold text-xs flex items-center gap-1">
            <FaRegClock /> {timeAgo}
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-[220px] h-[80px] rounded-2xl" src={image} alt="Pick 3" />
        <div className=" absolute h-10 w-10 flex items-center justify-center top-5 left-14 rounded-full border-2 text-white">
           <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default Section3small;
