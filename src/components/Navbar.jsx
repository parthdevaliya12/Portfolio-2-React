// import React from "react";
// import logo from "../assets/logo.jpg";

// const Navbar = () => {

//   const connect = () =>{
//     window.scroll(0,3500);
//   }

//   return (
//     <>
//       <div className="min-h-10 sticky top-0 backdrop-blur-md z-10">
//         <div className="flex flex-row items-center justify-between mt-1">
//           <div className="flex flex-row gap-1 items-center ml-10">
//             <img src={logo} alt="Logo" className="h-15 w-15" />
//             <h1 className="text-white text-3xl">Parth</h1>
//           </div>
//           <div className="flex flex-row gap-5 items-center">
//             <button onClick={connect} className="btn bg-[#c1ff72] text-black text-xl h-10 w-40 rounded-full mr-10 cursor-pointer border-none  transition">
//               Join me
//             </button>
//           </div>
//         </div>
//       <hr  className='text-gray-700'/>
//       </div>
      
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const connect = () => {
    window.scroll(0, 3500);
  };

  return (
    <>
      <div className="min-h-10 sticky top-0 backdrop-blur-md z-50">
        <div className="flex flex-row items-center justify-between mt-1 px-4 sm:px-10">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 sm:h-15 sm:w-15" />
            <h1 className="text-white text-2xl sm:text-3xl">Parth</h1>
          </div>

          {/* Join Me Button */}
          <div>
            <button
              onClick={connect}
              className="btn bg-[#c1ff72] text-black text-sm sm:text-xl h-8 sm:h-10 w-32 sm:w-40 rounded-full cursor-pointer border-none transition hover:shadow-[0_0_10px_#c1ff72]"
            >
              Contact Me
            </button>
          </div>
        </div>
        <hr className="text-gray-700 mt-2" />
      </div>
    </>
  );
};

export default Navbar;



