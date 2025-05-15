import React from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/user-icon.svg";

const Navbar = () => {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center font-inter">
      <div className="flex items-center">
        <div className="text-primary mr-2">
          <img src={logo} alt="DineOut Logo" />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img src={userIcon} className="h-10" alt="User Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
