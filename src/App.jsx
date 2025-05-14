import React from "react";
import Navbar from "./components/Navbar";
import CreateOrder from "./components/CreateOrder";
import OrderDashboard from "./components/OrderDashboard.jsx";

function App() {
  return (
    <>
      <div className="text-white bg-[#1D1D1D] h-screen overflow-hidden">
        <div className="container mx-auto px-4 h-screen flex flex-col">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            <CreateOrder />
            <OrderDashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
