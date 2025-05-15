import React from "react";

const MenuItem = ({ item, onToggle }) => {
  return (
    <div className="bg-[rgba(55,65,81,0.3)] rounded-md p-3 mb-3 flex justify-between items-center hover:bg-[rgba(55,65,81,0.4)] transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center mr-3">
          <img src={item.image} alt={item.name} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-xs text-gray-400">BDT {item.price}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="w-8 h-8 bg-gray-800 hover:bg-[#FF602C] rounded-full flex items-center justify-center transition-colors duration-300"
      >
        <svg
          className={`h-5 w-5 ${
            item.selected ? "text-red-500" : "text-green-500"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {item.selected ? (
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default MenuItem;
