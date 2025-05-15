import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateOrder from "./components/CreateOrder";
import OrderDashboard from "./components/OrderDashboard";
import initialOrders from "./data/initialOrders";

// Load from localStorage if exists, otherwise use initialOrders
const getStoredOrders = () => {
  const stored = localStorage.getItem("orders");
  return stored ? JSON.parse(stored) : initialOrders;
};

function App() {
  const [orders, setOrders] = useState(getStoredOrders);

  const handlePlaceOrder = (newOrder) => {
    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleDeliver = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "DELIVERED" } : order,
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="text-white bg-background min-h-screen font-inter">
      <div className="container mx-auto px-4 min-h-screen flex flex-col">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder onPlaceOrder={handlePlaceOrder} />
          <OrderDashboard
            orders={orders}
            onDelete={handleDelete}
            onDeliver={handleDeliver}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
