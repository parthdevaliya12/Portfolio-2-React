import React from "react";
import { Github, ExternalLink } from "lucide-react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/esvio.png";
import p4 from "../assets/p4.png";

const Projects = () => {
  const githublink = () => {
    window.open("https://github.com/parthdevaliya12");
  };

  const project = [
    {
      img: p1,
      title: "E-commerce Website (AirWell)",
      desc: "A complete AC Selling / E-Commerce Website developed using PHP and MySQL. This project includes product listing, customer management, cart system and admin panel to manage products and orders.",
      tech: "PHP, MySQL, HTML, CSS, JavaScript, AJAX",
    },
    {
      img: p2,
      title: "E-commerce Website (TeleMart)",
      desc: "A complete TV Selling / E-Commerce Website built using Django and SQLite. This project allows users to browse TVs, view product details, add items to cart, and place orders. It also includes an Admin Panel to manage products, categories, and orders.",
      tech: "Django, SQLite, HTML, CSS, JavaScript, AJAX",
    },
    {
      img: p4,
      title: "Expense Tracker (SpendWithMe)",
      desc: "SpendWithMe is a full-stack Group Expense Management web application built using the MERN stack. It allows users to create groups, split expenses equally using a unique group code, track balances, and generate professional PDF transaction reports.",
      tech: "MongoDB, Express.js, React.js, Node.js",
      link: "https://spendwithme.vercel.app/",
    },
    {
      img: p3,
      title: "Esvio – Property Listing & Booking Platform (Airbnb Clone)",
      desc: "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack. Users can list properties, browse listings, book properties, manage bookings, and update or delete their own listings.",
      tech: "MongoDB, Express.js, React.js, Node.js",
      link: "https://esvio.vercel.app/",
    },
  ];

  return (
    <>
      <div
        className="min-h-[700px] mb-20 flex justify-center items-center px-4 sm:px-6"
        id="project"
      >
        <div
          data-aos="flip-right"
          className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1200px]"
        >
          {project.map((proj, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1f1f1f] rounded-xl shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[#c1ff72]/20"
            >
              {/* Project Image */}
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-[180px] object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-xl font-semibold text-[#c1ff72]">
                  {proj.title}
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {proj.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {proj.tech.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#1f1f1f] text-[#c1ff72] px-3 py-1 rounded-full border border-[#2a2a2a]"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Icons Section */}
                <div className="flex justify-center gap-6 mt-4">
                  {/* GitHub Icon */}
                  <Github
                    size={22}
                    className="cursor-pointer text-white hover:text-[#c1ff72] transition"
                    onClick={githublink}
                  />

                  {/* Live Link Icon (if available) */}
                  {proj.link && (
                    <ExternalLink
                      size={22}
                      className="cursor-pointer text-white hover:text-[#c1ff72] transition"
                      onClick={() => window.open(proj.link)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
