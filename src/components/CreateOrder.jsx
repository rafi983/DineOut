import React from "react";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";

import MenuItem from "./MenuItem";

const CreateOrder = () => {
  return (
    <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-6 h-[calc(100vh-130px)] font-[Inter]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* Customer Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-[rgba(55,65,81,0.3)] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF602C] transition-all duration-300"
        />
      </div>

      {/* Choose Items */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container max-h-[250px] overflow-y-auto">
          <MenuItem
            image={hamburger}
            name="Hamburger"
            price={300}
            icon="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          />
          <MenuItem
            image={chicken}
            name="Chicken Nuggets"
            price={300}
            icon="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          />
          <MenuItem
            image={submarine}
            name="Submarine Sandwich"
            price={300}
            icon="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            iconColor="text-red-500"
          />
          <MenuItem
            image={pizza}
            name="Pizza slices"
            price={300}
            icon="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          />
        </div>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-[#FF602C] hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>
  );
};

export default CreateOrder;
