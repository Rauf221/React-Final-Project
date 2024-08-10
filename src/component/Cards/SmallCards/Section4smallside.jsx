import React from 'react'
import { TbSquareRotated } from "react-icons/tb";
import { IoMdFlame } from "react-icons/io";
const Section4smallside = ({ title, author, date, isDarkMode, count }) => {
  return (
    <div className="">
      
      <div className={`  flex gap-2 p-4 ${isDarkMode ? "text-white" : " text-black"}`}>
        <h1 className=" font-bold text-2xl bg-blue-600 flex justify-center items-center text-white-500">{count}</h1>
        <h1 className=" font-bold hover:text-blue-600 translition-all duration-300 text-sm">{title}</h1>
      </div>
      <div className={`pb-5 ${isDarkMode ? "text-white " : " text-black"}`}>
        <h1 className="flex font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center gap-3">
            <TbSquareRotated /> {date} 
          </p>
          <p className="text-red-500 flex items-center  gap-1">
          <IoMdFlame /> {count} Views
          </p>
        </h1>
      </div>
    </div>
  )
}

export default Section4smallside