// import React from "react";
// import { Languages } from "lucide-react";
// import reactimg from "../assets/react.jpg";
// import githubimg from "../assets/github.jpg";
// import javaimg from "../assets/java.jpg";
// import pyimg from "../assets/py.jpg";
// import commimg from "../assets/comm.jpg";
// import psimg from "../assets/ps.jpg";
// import phpimg from "../assets/php.jpg";
// import nodeimg from "../assets/node.jpg";
// import vercelimg from "../assets/vercel.jpg";
// import netlifyimg from "../assets/netlify.jpg";
// import tailimg from "../assets/tailwind.jpg";
// import mysqlimg from "../assets/mysql.jpg";
// import mongoimg from "../assets/mongodb.jpg";
// import debugimg from "../assets/debug.jpg";

// const Skills = () => {
//   const skill = [
//     {
//       title: "React JS",
//       img: reactimg,
//     },
//     {
//       title: "Tailwind Css",
//       img: tailimg,
//     },
//     {
//       title: "Java",
//       img: javaimg,
//     },
//     {
//       title: "Node JS",
//       img: nodeimg,
//     },
//     {
//       title: "Python",
//       img: pyimg,
//     },
//     {
//       title: "PHP",
//       img: phpimg,
//     },

//     {
//       title: "MYSQL",
//       img: mysqlimg,
//     },
//     {
//       title: "MongoDB",
//       img: mongoimg,
//     },
//     {
//       title: "Github",
//       img: githubimg,
//     },
//     {
//       title: "Git",
//       img: githubimg,
//     },
//     {
//       title: "Netlify",
//       img: netlifyimg,
//     },
//     {
//       title: "Vercel",
//       img: vercelimg,
//     },
//     {
//       title: "Communication",
//       img: commimg,
//     },
//     {
//       title: "Problem Solving",
//       img: psimg,
//     },
//     {
//       title: "Debugging",
//       img: debugimg,
//     },
    
//   ];

//   return (
//     <>
//       <div
//         className="min-h-auto mb-10 flex justify-center items-center"
//         id="skill"
//         data-aos="fade-up"
//       >
//         <div className="grid grid-cols-5 gap-15 mt-20 mb-20">
//           {skill.map((skill) => (
//             <div  className="btn transition bg-black h-auto w-50 shadow-md shadow-white rounded-md flex flex-col gap-3 justify-center items-center">
//               <img src={skill.img} alt="" className="h-20 w-20 rounded-full shadow shadow-white" />
//               <p className="text-[#c1ff72]">{skill.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;


import React from "react";
import { Languages } from "lucide-react";
import reactimg from "../assets/react.jpg";
import githubimg from "../assets/github.jpg";
import javaimg from "../assets/java.jpg";
import pyimg from "../assets/py.jpg";
import commimg from "../assets/comm.jpg";
import psimg from "../assets/ps.jpg";
import phpimg from "../assets/php.jpg";
import nodeimg from "../assets/node.jpg";
import vercelimg from "../assets/vercel.jpg";
import netlifyimg from "../assets/netlify.jpg";
import tailimg from "../assets/tailwind.jpg";
import mysqlimg from "../assets/mysql.jpg";
import mongoimg from "../assets/mongodb.jpg";
import debugimg from "../assets/debug.jpg";
import git from "../assets/git.png"

const Skills = () => {
  const skill = [
    { title: "React JS", img: reactimg },
    { title: "Tailwind Css", img: tailimg },
    { title: "Java", img: javaimg },
    { title: "Node JS", img: nodeimg },
    { title: "Python", img: pyimg },
    { title: "PHP", img: phpimg },
    { title: "MYSQL", img: mysqlimg },
    { title: "MongoDB", img: mongoimg },
    { title: "Github", img: githubimg },
    { title: "Git", img:git  },
    { title: "Netlify", img: netlifyimg },
    { title: "Vercel", img: vercelimg },
    { title: "Communication", img: commimg },
    { title: "Problem Solving", img: psimg },
    { title: "Debugging", img: debugimg },
   
  ];

  return (
    <>
      <div
        className="min-h-auto mb-10 flex justify-center items-center px-4 sm:px-6"
        id="skill"
        data-aos="flip-right"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mt-20 mb-20">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="btn transition bg-black h-auto w-full sm:w-[120px] md:w-[140px] lg:w-[150px] shadow-md shadow-white rounded-md flex flex-col gap-3 justify-center items-center p-4"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shadow shadow-white"
              />
              <p className="text-center text-sm sm:text-base text-[#c1ff72]">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
