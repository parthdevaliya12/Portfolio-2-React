// import React from "react";
// import { Github, ExternalLink } from "lucide-react";

// import p1 from "../assets/p1.png";
// import p2 from "../assets/p2.png";
// import p3 from "../assets/esvio.png";
// import p4 from "../assets/p4.png";

// const Projects = () => {
//   const githublink = () => {
//     window.open("https://github.com/parthdevaliya12");
//   };

//   const project = [
//     {
//       img: p1,
//       title: "E-commerce Website (AirWell)",
//       desc: "A complete AC Selling / E-Commerce Website developed using PHP and MySQL. This project includes product listing, customer management, cart system and admin panel to manage products and orders.",
//       tech: "PHP, MySQL, HTML, CSS, JavaScript, AJAX",
//     },
//     {
//       img: p2,
//       title: "E-commerce Website (TeleMart)",
//       desc: "A complete TV Selling / E-Commerce Website built using Django and SQLite. This project allows users to browse TVs, view product details, add items to cart, and place orders. It also includes an Admin Panel to manage products, categories, and orders.",
//       tech: "Django, SQLite, HTML, CSS, JavaScript, AJAX",
//     },
//     {
//       img: p4,
//       title: "Expense Tracker (SpendWithMe)",
//       desc: "SpendWithMe is a full-stack Group Expense Management web application built using the MERN stack. It allows users to create groups, split expenses equally using a unique group code, track balances, and generate professional PDF transaction reports.",
//       tech: "MongoDB, Express.js, React.js, Node.js",
//       link: "https://spendwithme.vercel.app/",
//     },
//     {
//       img: p3,
//       title: "Esvio – Property Listing & Booking Platform (Airbnb Clone)",
//       desc: "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack. Users can list properties, browse listings, book properties, manage bookings, and update or delete their own listings.",
//       tech: "MongoDB, Express.js, React.js, Node.js",
//       link: "https://esvio.vercel.app/",
//     },
//   ];

//   return (
//     <>
//       <div
//         className="min-h-[700px] mb-20 flex justify-center items-center px-4 sm:px-6"
//         id="project"
//       >
//         <div
//           data-aos="flip-right"
//           className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1200px]"
//         >
//           {project.map((proj, index) => (
//             <div
//               key={index}
//               className="bg-[#111111] border border-[#1f1f1f] rounded-xl shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[#c1ff72]/20"
//             >
//               {/* Project Image */}
//               <img
//                 src={proj.img}
//                 alt={proj.title}
//                 className="w-full h-[180px] object-cover rounded-lg"
//               />

//               {/* Content */}
//               <div className="flex flex-col gap-3 text-center">
//                 <h2 className="text-xl font-semibold text-[#c1ff72]">
//                   {proj.title}
//                 </h2>

//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   {proj.desc}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap justify-center gap-2 mt-2">
//                   {proj.tech.split(",").map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-[#1f1f1f] text-[#c1ff72] px-3 py-1 rounded-full border border-[#2a2a2a]"
//                     >
//                       {tech.trim()}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Icons Section */}
//                 <div className="flex justify-center gap-6 mt-4">
//                   {/* GitHub Icon */}
//                   <Github
//                     size={22}
//                     className="cursor-pointer text-white hover:text-[#c1ff72] transition"
//                     onClick={githublink}
//                   />

//                   {/* Live Link Icon (if available) */}
//                   {proj.link && (
//                     <ExternalLink
//                       size={22}
//                       className="cursor-pointer text-white hover:text-[#c1ff72] transition"
//                       onClick={() => window.open(proj.link)}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;
import useReveal from "../hooks/useReveal";

const PROJECTS = [
  {
    name: "Real Estate Booking Platform (Airbnb Clone)",
    type: "Marketplace Platform",
    description:
      "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack.Users can list properties, browse listings, book properties, manage bookings, and update or delete their own listings",
    stack: ["React", "Tailwind", "Node", "MongoDB"],
    repo: "https://github.com/parthdevaliya12/Airbnb-Clone",
    live: "https://esvio.vercel.app",
    featured: true,
  },
  {
    name: "Online Television Shopping System",
    type: "E-Commerce Platform",
    description:
      "This project allows users to browse TVs, view product details, add items to cart, and place orders.It also includes an Admin Panel to manage products, categories, and orders.",
    stack: ["Bootstrap", "Django", "SQLite"],
    repo: "https://github.com/parthdevaliya12/TeleMart-TV-Django",
    live: "",
    featured: false,
  },
  {
    name: "Online Air-Conditner Shopping System",
    type: "E-Commerce Platform",
    description:
      "This project includes product listing, customer management, cart system, and admin panel to manage products and orders.",
    stack: ["Bootstrap", "PHP", "MySQL"],
    repo: "https://github.com/parthdevaliya12/AirWell-AC-PHP",
    live: "",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""} group relative rounded-xl border border-ink-border bg-ink-panel overflow-hidden hover:border-amber/40 hover:-translate-y-1.5 transition-all duration-300 ${
        project.featured ? "lg:col-span-1" : ""
      }`}
      style={{ animationDelay: `${index * 110}ms` }}
    >
      {/* file-tab header */}
      <div className="flex items-center justify-between bg-ink-soft border-b border-ink-border px-5 py-3">
        <span className="font-mono text-xs text-muted">
          /projects/{project.name.toLowerCase()}
        </span>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-wide text-amber bg-amber/10 border border-amber/20 rounded-full px-2 py-0.5">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="font-mono text-xs text-teal mb-1">{project.type}</p>
        <h3 className="font-display text-xl font-semibold text-paper group-hover:text-amber transition-colors">
          {project.name}
        </h3>
        <p className="font-body text-sm text-muted mt-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-paper/80 bg-ink-soft border border-ink-border rounded-md px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-amber hover:text-paper transition-colors inline-flex items-center gap-1.5"
          >
            Live demo <span aria-hidden="true">↗</span>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted hover:text-paper transition-colors inline-flex items-center gap-1.5"
          >
            Source <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="projects" className="relative py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "in-view" : ""} mb-16 text-center`}
        >
          <p className="font-mono text-sm text-amber mb-3">// projects/</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
            Selected Work
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto">
            A few projects that best represent how I think through problems and
            ship interfaces end to end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/parthdevaliya12?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink-border px-6 py-3 font-mono text-sm text-paper hover:border-amber/50 hover:text-amber transition-all duration-200"
          >
            View all repositories <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
