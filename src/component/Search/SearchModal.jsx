import React from "react";

const SearchModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed  justify-center inset-0 transition-opacity duration-500  bg-black bg-opacity-86 flex items-center z-[9999]">
      <div className=" flex flex-col items-center rounded-lg p-8 justify-center  w-full ">
        <button
          onClick={toggleModal}
          className="absolute top-0 right-1 text-5xl font-extrabold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        
        <input
          type="text"
          placeholder="Search. . ."
          className="w-[677px] h-[100px] text-6xl font-bold p-2 outline-none border-b-2 border-[#242424] text-white  bg-black"
        />
        <div className="w-[677px] ">
        <h1 className="text-gray-500 text-xl pt-5">Type above and press Enter to search. Press Esc to cancel.</h1>
      </div>
      </div>
     
    </div>
  );
};

export default SearchModal;
