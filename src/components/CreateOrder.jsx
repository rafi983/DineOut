import React, { useState, useEffect } from "react";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";
import taco from "../assets/taco.svg";
import sushi from "../assets/sushi.svg";
import pasta from "../assets/pasta.svg";
import frenchFries from "../assets/french-fries.svg";
import icecream from "../assets/icecream.svg";
import MenuItem from "./MenuItem";

const initialItems = [
  { id: 1, name: "Hamburger", price: 300, image: hamburger, selected: false },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 430,
    image: chicken,
    selected: false,
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 380,
    image: submarine,
    selected: false,
  },
  { id: 4, name: "Pizza slices", price: 750, image: pizza, selected: false },
  { id: 5, name: "Taco", price: 800, image: taco, selected: false },
  { id: 6, name: "Sushi", price: 450, image: sushi, selected: false },
  { id: 7, name: "Pasta", price: 1100, image: pasta, selected: false },
  {
    id: 8,
    name: "French fries",
    price: 500,
    image: frenchFries,
    selected: false,
  },
  { id: 9, name: "Ice Cream", price: 600, image: icecream, selected: false },
];

const CreateOrder = ({ onPlaceOrder }) => {
  const [form, setForm] = useState(() => {
    const stored = localStorage.getItem("form");
    return stored
      ? JSON.parse(stored)
      : { customerName: "", items: initialItems };
  });

  const [error, setError] = useState("");

  const { customerName, items } = form;

  const totalPrice = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const isNameTyped = customerName.trim() !== "";
  const isItemSelected = totalPrice > 0;
  const isButtonEnabled = isNameTyped || isItemSelected;

  const handleNameChange = (e) => {
    const updated = { ...form, customerName: e.target.value };
    setForm(updated);
  };

  const toggleItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item,
    );
    const updated = { ...form, items: updatedItems };
    setForm(updated);
  };

  const handlePlaceOrder = () => {
    if (!isNameTyped) {
      setError("Customer name is required.");
      return;
    }
    if (!isItemSelected) {
      setError("Please select at least one item.");
      return;
    }

    const selectedItems = items.filter((item) => item.selected);

    onPlaceOrder({
      id: Date.now(),
      name: customerName,
      itemsCount: selectedItems.length,
      amount: totalPrice,
      status: "PENDING",
    });

    const resetForm = { customerName: "", items: initialItems };
    setForm(resetForm);
    setError("");
    localStorage.removeItem("form");
  };

  // Sync form state to localStorage
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

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
          value={customerName}
          onChange={handleNameChange}
          className="w-full rounded-md p-2 font-inter text-white transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: "rgba(55, 65, 81, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
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
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
        disabled={!isButtonEnabled}
        className={`w-full bg-primary text-white font-medium py-3 rounded-full transition-all duration-300 transform ${
          isButtonEnabled
            ? "hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1"
            : "opacity-60 cursor-not-allowed"
        }`}
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
};

export default CreateOrder;
