// import React from "react";
// import cc from "../assets/cc.png";
// import cs from "../assets/cs.png";
// import mern from "../assets/mern.png";

// const Certificate = () => {
//   const cer = [
//     {
//       img: cs,
//       title: "Introduction to Cyber Security",

//     },
//     {
//       img: cc,
//       title: "Introduction to Cloud Computing",

//     },
//     {
//       img: mern,
//       title: "Introduction to MERN Stack",
//     },
    
//   ];

//   return (
//     <>
//       <div
//         className="min-h-[700px]  mb-10 flex justify-center items-center"
//         id="certificate"
//         data-aos="fade-up"
//       >
//         <div className="grid grid-cols-3 gap-10 mt-20">
//           {cer.map((cer) => (
//             <div  className="btn bg-black shadow-md shadow-white rounded-md flex flex-col gap-5 h-auto w-100 p-2 transition">
//               <img src={cer.img} alt="" />
//               <div className="flex flex-col gap-1 text-center">
//                 <h2 className="text-xl text-[#c1ff72]">{cer.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Certificate;


import React from "react";
import cc from "../assets/cc.png";
import cs from "../assets/cs.png";
import mern from "../assets/mern.png";
import hibernate from "../assets/hibernate.png";
import javascript from "../assets/javascript.jpg";


const Certificate = () => {
  const cer = [
    { img: cs, title: "Introduction to Cyber Security" },
    { img: cc, title: "Introduction to Cloud Computing" },
    { img: mern, title: "MERN Stack App Development" },
    { img: hibernate, title: "Hands-On Learning On Hibernate Framework" },
    { img: javascript, title: "Introduction to Javascript Advanced" },

  ];

  return (
    <>
      <div
        className="min-h-[700px] mb-10 flex justify-center items-center px-4 sm:px-6"
        id="certificate"
        data-aos="flip-right"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-20 w-full max-w-[1200px]">
          {cer.map((cer, index) => (
            <div
              key={index}
              className="btn bg-black shadow-md shadow-white rounded-md flex flex-col gap-5 h-auto w-full transition p-4"
            >
              <img
                src={cer.img}
                alt={cer.title}
                className="w-full h-auto object-contain rounded-md"
              />
              <div className="flex flex-col gap-1 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl text-[#c1ff72]">
                  {cer.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;

