// import { Award, Code, Contact, Home, User, Folder} from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <>
    
//       <div className="min-h-10 fixed bottom-0 w-full backdrop-blur-md z-10">
//          <hr className='text-gray-700'/>
//         <div className="nav flex flex-row justify-center items-center">
//           <ul className="flex flex-row gap-20 justify-center items-center mt-2">
            
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//              <a href="#home"> <Home className="absolute right-12"/>Home</a>
//             </li>
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//               <a href="#about"><User className="absolute right-12"/>About</a>
//             </li>
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//               <a href="#skill"><Code className="absolute right-11"/>Skills</a>
//             </li>
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//               <a href="#certificate"><Award className="absolute right-20"/>Certificate</a>
//             </li>
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//               <a href="#project"><Folder className="absolute right-17"/>Projects</a>
//             </li>
//             <li className="text-md text-white transition hover:text-[#c1ff72] relative">
//               <a href="#contact"><Contact className="absolute right-16"/>Contact</a>
//             </li>
//           </ul>
           
//         </div>
       
//       </div>
      
//     </>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { Award, Code, Contact, Home, User, Folder, Menu, X } from "lucide-react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed bottom-0 backdrop-blur-md z-10">
        <hr className="text-gray-700" />

        {/* Toggle button for mobile */}
        <div className="flex justify-between items-center px-4 sm:hidden py-2">
          <span className="text-white font-bold">Menu</span>
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col sm:flex-row justify-center items-center py-2 sm:flex`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center text-center">
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <Home /> <a href="#home">Home</a>
            </li>
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <User /> <a href="#about">About</a>
            </li>
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <Code /> <a href="#skill">Skills</a>
            </li>
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <Award /> <a href="#certificate">Certificate</a>
            </li>
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <Folder /> <a href="#project">Projects</a>
            </li>
            <li className="text-md text-white transition hover:text-[#c1ff72] flex items-center gap-2">
              <Contact /> <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

