import React from "react";
import { TbSquareRotated } from "react-icons/tb";

const MediumCard = ({ image, category, title, author, date, isDarkMode  }) => {
    
  return (
    
    <div className={`w-[100%] h-[390px] shadow-md rounded-xl ${isDarkMode ? "text-white bg-black " : " text-black bg-white"}`} >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-[100%] h-[250px] -z-10 object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt=""
        />
        <div className="absolute bottom-0 left-5">
          <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-blue-600 rounded-md text-xs">
            {category}
          </h1>
        </div>
      </div>
      <div className= {`  ${isDarkMode ? "text-white" : "bg-white"}`}>
        <h1 className="p-6  font-bold hover:text-blue-600 duration-300 text-lg">{title}</h1>
      </div>
      <div className={` ${isDarkMode ? "text-white" : " text-black"}`}>
        <h1 className="flex ml-6 font-bold items-center  gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center">
            <TbSquareRotated /> {date}
          </p>
        </h1>
      </div>
    </div>
  );
};

export default MediumCard;
