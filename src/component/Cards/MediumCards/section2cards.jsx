import React from 'react';
import { TbSquareRotated } from "react-icons/tb";
import { useDeleteCard } from '../../../Hooks/useCards';

const Section2cards = ({ id, image, category, title, author, date, isDarkMode, count, onEdit }) => {
  const { mutate: deleteCard } = useDeleteCard();

  const handleDelete = () => {
    if (window.confirm("Bu öğeyi silmek istediğinize emin misiniz?")) {
      deleteCard(id); 
    }
  };

  const handleEdit = () => {
    onEdit(id); 
  };

  return (
    <div className="rounded-xl mb-10">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-full h-30% -z-10 object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt={title}
        />
        <div className="absolute top-0">
          <h1 className="pl-3 pr-3 py-1 text-white font-bold bg-blue-600 rounded-md text-xs">
            {category}
          </h1>
        </div>
      </div>

      <div className={`flex gap-2 p-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        <h1 className="font-bold text-3xl text-gray-500">{count}</h1>
        <h1 className="font-bold hover:text-blue-600 transition-all duration-300 text-md">
          {title}
        </h1>
      </div>

      <div className={`pb-5 ${isDarkMode ? "text-white" : "text-black"}`}>
        <h1 className="flex ml-9 font-bold items-center gap-2 text-xs">
          {author}
          <p className="text-gray-500 flex items-center">
            <TbSquareRotated /> {date}
          </p>
        </h1>
      </div>

      <div className="flex gap-2">
   
        <button
          className={`w-16 h-5 text-white font-bold rounded-md ${isDarkMode ? "bg-gray-600" : "bg-red-600"}`}
          onClick={handleDelete} 
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default Section2cards;
