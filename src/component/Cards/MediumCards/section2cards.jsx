import React from 'react'
import { TbSquareRotated } from "react-icons/tb";
const Section2cards = ({ image, category, title, author, date, isDarkMode, count }) => {
  return (
    <div className=" rounded-xl mb-10  ">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-[100%] h-[30%] -z-10 object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt=""
        />
        <div className="absolute top-0 ">
          <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-blue-600 rounded-md text-xs">
            {category}
          </h1>
        </div>
      </div>
      
      <div className={`  flex gap-2 p-4 ${isDarkMode ? "text-white" : " text-black"}`}>
        <h1 className=" font-bold text-3xl  text-gray-500">{count}</h1>
        <h1 className=" font-bold hover:text-blue-600 translition-all duration-300 text-md">{title}</h1>
      </div>
      <div className={`pb-5 ${isDarkMode ? "text-white " : " text-black"}`}>
        <h1 className="flex ml-9 font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center">
            <TbSquareRotated /> {date}
          </p>
        </h1>
      </div>
    </div>
  )
}

export default Section2cards