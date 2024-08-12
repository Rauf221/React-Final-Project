import React from 'react';
import { TbSquareRotated } from "react-icons/tb";


const FeaturedReviews = ({ image, category, title, author, date, isDarkMode, count, }) => {

  return (
    <div className= {`rounded-xl mb-10 ${isDarkMode ? "text-white bg-black" : "bg-white text-black"}`}>
      <div className="relative w-[100%] overflow-hidden rounded-xl">
        <img
          className=" w-[100%] h-[170px] -z-10 object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-0 left-8">
          <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-blue-600 rounded-md text-xs">
            {category}
          </h1>
        </div>

        <div className="absolute top-1 right-1 bg-opacity-50 bg-black text-white w-12 h-12 flex justify-center items-center border-4 border-blue-700 rounded-full">
            <h1>8.9</h1>
        </div>
      </div>

      <div className={`flex gap-4 p-6 ${isDarkMode ? "text-white" : "text-black"}`}>
       
        <h1 className="font-extrabold hover:text-blue-600 transition-all  duration-300 text-md">
          {title}
        </h1>
      </div>

      <div className={`pb-5 ${isDarkMode ? "text-white" : "text-black"}`}>
        <h1 className="flex ml-6 font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center">
            <TbSquareRotated /> {date}
          </p>
        </h1>
      </div>

    
    </div>
  );
};

export default FeaturedReviews;
