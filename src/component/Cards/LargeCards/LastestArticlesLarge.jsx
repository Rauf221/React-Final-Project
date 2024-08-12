import React from "react";

const LastestArticlesLarge = ({
  image,
  category,
  title,
  authorImage,
  author,
  date,
  description,
  isDarkMode,
}) => {
  return (
    <div
      className={`flex w-full  gap-2 border rounded-xl ${
        isDarkMode ? "text-white bg-black  border-0" : " text-black border-[#d0d0d0] bg-white"
      }`}
    >
      <div className="w-[350px] relative overflow-hidden ">
        <div className="w-[310px]">
          <img
            className="w-[100%] h-[250px] object-cover overflow-hidden rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 overflow-hidden">
          <h1 className="pl-4 pr-4 py-1 text-white font-bold bg-fuchsia-600 rounded-xl text-xs">
            {category}
          </h1>
        </div>
      </div>
      <div className="w-[70%] p-6 ">
        <div className="w-[100%] h-[100%] gap-4 flex flex-col justify-center ">
          <h1
            className={` font-bold hover:text-blue-600 translition-all line-clamp-2 duration-300 text-2xl ${
              isDarkMode ? "text-white" : " text-black"
            }`}
          >
            {title}
          </h1>
          <div className=" flex">
            <div>
              <img className="w-5 h-5 rounded-full" src={authorImage} alt="" />
            </div>
            <h1
              className={` flex ml-4 font-bold items-center gap-2 text-xs ${
                isDarkMode ? "text-white" : " text-black"
              }`}
            >
              {author}
              <p className="text-gray-500 flex items-center">| {date}</p>
            </h1>
          </div>
          <div
            className={` flex flex-col gap-3 ${
              isDarkMode ? "text-white" : " text-black"
            }`}
          >
            <h1 className="text-sm font-">{description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestArticlesLarge;
