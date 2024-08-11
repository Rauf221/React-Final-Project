import React from 'react'
import { TbSquareRotated } from "react-icons/tb";
import { IoMdFlame } from "react-icons/io";
const Section4smallside = ({ views ,title, author, date, isDarkMode, count }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      
      <div className={`  flex gap-2 pt-4 ${isDarkMode ? "text-white" : " text-black"}`}>
        <h1 className=" font-bold text-xl bg-blue-600 text-white w-12 h-8 rounded-full flex justify-center items-center text-white-500">{count}</h1>
        <h1 className=" font-bold hover:text-blue-600 translition-all duration-300 text-md">{title}</h1>
      </div>
      <div className={` ml-10 ${isDarkMode ? "text-white " : " text-black"}`}>
        <h1 className="flex font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center gap-3">
            <TbSquareRotated /> {date} 
          </p>
          <p className="text-red-500 font-normal flex items-center  gap-1">
          <IoMdFlame /> {views} Views
          </p>
        </h1>
      </div>
    </div>
  )
}

export default Section4smallside