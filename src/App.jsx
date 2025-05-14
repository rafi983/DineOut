import React from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="text-white bg-[#1D1D1D] h-screen overflow-hidden font-[Inter]">
        <div className="container mx-auto px-4 h-screen flex flex-col">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
