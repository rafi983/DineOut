import React from "react";

const MenuItem = ({
  image,
  name,
  price,
  icon,
  iconColor = "text-green-500",
}) => {
  return (
    <div className="bg-[rgba(55,65,81,0.3)] rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center mr-3">
          <img src={image} alt={name} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <button className="w-8 h-8 bg-gray-800 hover:bg-[#FF602C] rounded-full flex items-center justify-center transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${iconColor}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d={icon} clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default MenuItem;
