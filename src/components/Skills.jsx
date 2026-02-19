import React from "react";
import { Languages } from "lucide-react";
import reactimg from "../assets/react.jpg";
import githubimg from "../assets/github.jpg";
import javaimg from "../assets/java.jpg";
import phpimg from "../assets/php.jpg";
import nodeimg from "../assets/node.jpg";
import vercelimg from "../assets/vercel.jpg";
import netlifyimg from "../assets/netlify.jpg";
import tailimg from "../assets/tailwind.jpg";
import mysqlimg from "../assets/mysql.jpg";
import mongoimg from "../assets/mongodb.jpg";
import render from "../assets/render.png";
import git from "../assets/git.png";

const Skills = () => {
  const skill = [
    { title: "React JS", img: reactimg },
    { title: "Tailwind Css", img: tailimg },
    { title: "Node JS", img: nodeimg },
    { title: "Java", img: javaimg },
    { title: "PHP", img: phpimg },
    { title: "MYSQL", img: mysqlimg },
    { title: "MongoDB", img: mongoimg },
    { title: "Github", img: githubimg },
    { title: "Git", img: git },
    { title: "Netlify", img: netlifyimg },
    { title: "Vercel", img: vercelimg },
    { title: "Render", img: render },
  ];

  return (
    <>
      <div
        className="min-h-auto mb-10 flex justify-center items-center px-4 sm:px-6"
        id="skill"
        data-aos="flip-right"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-20 mb-20">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="group transition-all duration-300 bg-[#111111] border border-[#1f1f1f] hover:border-[#c1ff72] h-auto w-full sm:w-[120px] md:w-[140px] lg:w-[150px] rounded-xl flex flex-col gap-4 justify-center items-center p-5 shadow-md hover:shadow-[#c1ff72]/20 hover:-translate-y-2"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-[#2a2a2a] group-hover:border-[#c1ff72] transition duration-300"
              />
              <p className="text-center text-sm sm:text-base text-[#c1ff72] font-medium">
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
