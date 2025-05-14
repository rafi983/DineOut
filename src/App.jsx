import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateOrder from "./components/CreateOrder";
import OrderDashboard from "./components/OrderDashboard.jsx";
import initialOrders from "./data/initialOrders.js";

function App() {
  const [orders, setOrders] = useState(initialOrders);

  const handlePlaceOrder = (newOrder) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleDeliver = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order,
      ),
    );
  };

  return (
    <div className="text-white bg-[#1D1D1D] h-screen overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex flex-col">
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
