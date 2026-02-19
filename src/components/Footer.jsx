import React, { useState } from "react";
import {
  Home,
  User,
  Code,
  Award,
  Folder,
  Contact,
  Menu,
  X,
} from "lucide-react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
      <hr className="border-gray-700" />

      <div className="flex justify-between items-center px-4 py-2 sm:hidden">
        <span className="text-white font-bold">Menu</span>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      <div
        className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row justify-center items-center py-3`}
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>

          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-0 sm:ml-6">
          © {new Date().getFullYear()} Parth Devaliya. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
