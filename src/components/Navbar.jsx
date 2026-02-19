import React from "react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const connect = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
          <h1 className="text-white text-lg sm:text-2xl">Parth</h1>
        </div>

        <button
          onClick={connect}
          className="bg-[#c1ff72] text-black text-xs sm:text-base 
          px-4 sm:px-6 py-1.5 sm:py-2 rounded-full 
          transition hover:shadow-[0_0_12px_#c1ff72] hover:scale-105"
        >
          Hire Me
        </button>
      </div>

      <hr className="border-gray-700" />
    </div>
  );
};

export default Navbar;
