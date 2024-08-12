import React from 'react'
import { TbSquareRotated } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";

const MediumVideoCards = ({ image, category, title, author, date, isDarkMode, count }) => {
  return (
    <div className=" rounded-xl relative mb-10  ">
      <div className="relative z-0 overflow-hidden rounded-xl">
        <img
          className="w-[340px] relative h-[200px] -z-10 object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt=""
        />
      
      </div>
      <div
        className={`absolute h-16 w-16 items-center justify-center top-16 left-[116px] rounded-full border-2 text-white flex`} 
         
      >
        <FaPlay />
      </div>
      
      <div className={` absolute top-40 w-64 ml-[22px] z-10  flex flex-col gap-2 p-4 text-white bg-black `}>
        
        <h1 className=" font-bold hover:text-blue-600 translition-all line-clamp-2 duration-300 text-md">{title}</h1>
        <div className="">
        <h1 className="flex  font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 gap-2 flex items-center">
            <TbSquareRotated /> {date}
          </p>
        </h1>
      </div>
      </div>
    
    </div>
  )
}

export default MediumVideoCards