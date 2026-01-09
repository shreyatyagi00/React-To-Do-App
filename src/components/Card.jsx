import React from "react";

const Card = ({ task, description, deleteHandler, idx }) => {
  return (
    <div className="border border-indigo-300 lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-2 px-2 flex flex-col text-center bg-indigo-200  ">
      
      <div>
        <span className="font-bold text-indigo-900 text-md">TITLE:</span>
        <span className="text-md text-gray-600 ml-2">{task}</span>
      </div>

      <div className="mt-1">
        <span className="font-bold text-indigo-900 text-md">DESCRIPTION:</span>
        <span className="text-md text-gray-600 ml-2">{description}</span>
      </div>

      <button 
             className="bg-linear-to-br from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg active:scale-95 active:bg-purple-700 hover:bg-purple-600 transition-colors duration-300
              "
              onClick={() => {
              deleteHandler(idx)
            }}>
        Delete
      </button>

    </div>
  );
};

export default Card;

