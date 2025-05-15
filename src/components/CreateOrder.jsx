import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";
import MenuItem from "./MenuItem";

const initialItems = [
  { id: 1, name: "Hamburger", price: 300, image: hamburger, selected: false },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 300,
    image: chicken,
    selected: false,
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 300,
    image: submarine,
    selected: false,
  },
  { id: 4, name: "Pizza slices", price: 300, image: pizza, selected: false },
];

const CreateOrder = ({ onPlaceOrder }) => {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const totalPrice = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    if (!customerName.trim() || totalPrice === 0) return;

    const selectedItems = items.filter((item) => item.selected);

    onPlaceOrder({
      id: Date.now(),
      name: customerName,
      itemsCount: selectedItems.length,
      amount: totalPrice,
      status: "PENDING",
    });

    setCustomerName("");
    setItems(initialItems);
  };

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh-130px)] font-inter">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm font-normal mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm mb-2 font-medium">Customer Name</label>
        <input
          type="text"
          className="w-full rounded-md p-2 font-inter text-white transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: "rgba(55, 65, 81, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.3)", // ✅ subtle white border
            outline: "none",
          }}
          onFocus={(e) => {
            e.target.style.border = "1px solid #FF602C";
            e.target.style.boxShadow = "0 0 0 2px #FF602C";
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            e.target.style.boxShadow = "none";
          }}
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-2 font-medium">Choose Items</label>
        <div className="items-container max-h-[250px] overflow-y-auto">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={!customerName.trim() || totalPrice === 0}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-40"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
};

export default CreateOrder;
