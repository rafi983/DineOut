import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";
import MenuItem from "./MenuItem";

const initialItems = [
  {
    id: 1,
    name: "Hamburger",
    price: 300,
    image: hamburger,
    quantity: 0,
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 300,
    image: chicken,
    quantity: 0,
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 300,
    image: submarine,
    quantity: 0,
  },
  {
    id: 4,
    name: "Pizza slices",
    price: 300,
    image: pizza,
    quantity: 0,
  },
];

const CreateOrder = ({ onPlaceOrder }) => {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState(initialItems);

  const handleCustomerChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleIncrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const handlePlaceOrder = () => {
    if (!customerName.trim() || totalPrice === 0) return;

    const selectedItems = items.filter((item) => item.quantity > 0);
    onPlaceOrder({
      id: Date.now(),
      name: customerName,
      itemsCount: selectedItems.reduce((sum, i) => sum + i.quantity, 0),
      amount: totalPrice,
      status: "PENDING",
    });

    // Reset form
    setCustomerName("");
    setItems(initialItems);
  };

  return (
    <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-6 h-[calc(100vh-130px)] font-medium">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF602C] transition-all duration-300"
          value={customerName}
          onChange={handleCustomerChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-2">Choose Items</label>
        <div className="items-container max-h-[250px] overflow-y-auto">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={!customerName.trim() || totalPrice === 0}
        className="w-full bg-[#FF602C] hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-40"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
};

export default CreateOrder;
