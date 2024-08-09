import React from "react";
import { TbSquareRotated } from "react-icons/tb";

const LargeCard = ({ image, category, title1, title2, author, date, authorImage }) => {
   
  return (
    <div className="h-[100%] relative overflow-hidden rounded-xl">
      <img
        className="w-[100%] h-[100%] -z-10 object-cover transition-all duration-500 hover:scale-105"
        src={image}
        alt=""
      />
      <div className="absolute bottom-48 left-10">
        <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-fuchsia-600 rounded-md text-xs">
          {category}
        </h1>
      </div>
      <div className="absolute bottom-16 left-10">
        <h1 className="text-3xl text-white font-bold w-[100%] p-2 bg-black">{title1}</h1>
        <h1 className="text-3xl text-white font-bold w-[90%] p-2 mt-2 bg-black">{title2}</h1>
      </div>
      <div className="absolute z-50 bottom-3 left-11">
        <img className="w-10 h-10 rounded-full" src={authorImage} alt="" />
      </div>
      <div className="absolute z-50 bottom-6 left-20">
        <h1 className="flex ml-4 text-white font-bold items-center gap-2 text-xs">
          {author} <TbSquareRotated /> {date}
        </h1>
      </div>
    </div>
  );
};

export default LargeCard;
