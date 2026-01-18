// import React from "react";
// import p1 from "../assets/p1.png";
// import p2 from "../assets/p2.png";
// import p3 from "../assets/p3.png";

// const Projects = () => {

//   const githubProject = () =>{
//     window.open("https://github.com/parthdevaliya12");
//   }

//   const project = [
//     {
//       img: p1,
//       title: "Online Air Conditioner Shopping System",
//       desc: "These project is build using PHP and MySql...",
//     },
//     {
//       img: p2,
//       title: "Online Television Shopping System",
//       desc: "These project is build using Dajango and SQLite...",
//     },
//     {
//       img: p3,
//       title: "Online Men's Perfume Selling System",
//       desc: "These project is build using PHP and MySql...",
//     },
//   ];

//   return (
//     <>
//       <div
//         className="min-h-[700px]  mb-10 flex justify-center items-center"
//         id="project"
//         data-aos="fade-up"
//       >
//         <div className="grid grid-cols-3 gap-10 ">
//           {project.map((project) => (
//             <div  onClick={githubProject} className="btn bg-black shadow-md shadow-white rounded-md flex flex-col gap-5 h-auto w-100 p-2 transition">
//               <img src={project.img} alt="" />
//               <div className="flex flex-col gap-1 text-center">
//                 <h2 className="text-xl text-[#c1ff72]">{project.title}</h2>
//                 <p>{project.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;


import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const Projects = () => {

  const githublink = () => {
    window.open("https://github.com/parthdevaliya12");
    
  };

  const project = [
    {
      img: p1,
      title: "Online Air Conditioner Shopping System",
      desc: "This project is built using PHP and MySQL...",
    },
    {
      img: p2,
      title: "Online Television Shopping System",
      desc: "This project is built using Django and SQLite...",
    },
    {
      img: p3,
      title: "Online Men's Perfume Selling System",
      desc: "This project is built using PHP and MySQL...",
    },
     {
      img: p4,
      title: "Expense Tracker",
      desc: "This project is built using MongoDB, Express.js, React.js and Node.js...",
    },
  ];

  return (
    <>
      <div
        className="min-h-[700px] mb-20 flex justify-center items-center px-4 sm:px-6"
        id="project"
       
      >
        <div  data-aos="flip-up" className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1200px]">
          {project.map((proj, index) => (
            <div
              key={index}
              onClick={githublink}
              className="btn bg-black shadow-md shadow-white rounded-md flex flex-col gap-5 h-auto w-full p-4 transition hover:scale-105 cursor-pointer"
            >
              <img
               
                src={proj.img}
                alt={proj.title}
                className="w-full h-auto object-contain rounded-md"
              />
              <div className="flex flex-col gap-1 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl text-[#c1ff72]">
                  {proj.title}
                </h2>
                <p className="text-sm sm:text-base">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
