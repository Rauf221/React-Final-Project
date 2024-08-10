import React from "react";
import { TbSquareRotated } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";

const PhonesTechLarge = ({ image, category, title1, title2, author, date, authorImage, type, ...props }) => {
  return (
    <div className="h-[100%] w-full relative overflow-hidden rounded-2xl">
      <img
        className="w-[100%] h-[100%] -z-10 object-cover transition-all rounded-2xl duration-500 hover:scale-105"
        src={image}
        alt=""
      />
      <div
        className={`absolute h-16 w-16 items-center justify-center top-10 left-96 rounded-full border-2 text-white ${
          type === "video" ? "flex" : "hidden"
        }`}
      >
        <FaPlay />
      </div>
      <div className="absolute bottom-40 left-3 ">
        <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-fuchsia-600 rounded-md text-xs">
          {category}
        </h1>
      </div>
      <div className="absolute bottom-12 left-3">
        <h1 className="text-lg text-white font-bold inline-block p-2 bg-black">{title1}</h1>
        <h1 className="text-lg text-white font-bold inline-block p-2 mt-2 bg-black">{title2}</h1>
      </div>

      <div className="absolute z-50 bottom-4 left-3">
        <h1 className="flex ml-4 text-white font-bold items-center gap-2 text-xs">
          {author} <TbSquareRotated /> {date}
        </h1>
      </div>
    </div>
  );
};

export default PhonesTechLarge;
