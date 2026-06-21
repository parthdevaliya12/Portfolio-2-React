// import React from "react";
// import { Languages } from "lucide-react";
// import reactimg from "../assets/react.jpg";
// import githubimg from "../assets/github.jpg";
// import javaimg from "../assets/java.jpg";
// import phpimg from "../assets/php.jpg";
// import nodeimg from "../assets/node.jpg";
// import vercelimg from "../assets/vercel.jpg";
// import netlifyimg from "../assets/netlify.jpg";
// import tailimg from "../assets/tailwind.jpg";
// import mysqlimg from "../assets/mysql.jpg";
// import mongoimg from "../assets/mongodb.jpg";
// import render from "../assets/render.png";
// import git from "../assets/git.png";

// const Skills = () => {
//   const skill = [
//     { title: "React JS", img: reactimg },
//     { title: "Tailwind Css", img: tailimg },
//     { title: "Node JS", img: nodeimg },
//     { title: "Java", img: javaimg },
//     { title: "PHP", img: phpimg },
//     { title: "MYSQL", img: mysqlimg },
//     { title: "MongoDB", img: mongoimg },
//     { title: "Github", img: githubimg },
//     { title: "Git", img: git },
//     { title: "Netlify", img: netlifyimg },
//     { title: "Vercel", img: vercelimg },
//     { title: "Render", img: render },
//   ];

//   return (
//     <>
//       <div
//         className="min-h-auto mb-10 flex justify-center items-center px-4 sm:px-6"
//         id="skill"
//         data-aos="flip-right"
//       >
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-20 mb-20">
//           {skill.map((skill, index) => (
//             <div
//               key={index}
//               className="group transition-all duration-300 bg-[#111111] border border-[#1f1f1f] hover:border-[#c1ff72] h-auto w-full sm:w-[120px] md:w-[140px] lg:w-[150px] rounded-xl flex flex-col gap-4 justify-center items-center p-5 shadow-md hover:shadow-[#c1ff72]/20 hover:-translate-y-2"
//             >
//               <img
//                 src={skill.img}
//                 alt={skill.title}
//                 className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-[#2a2a2a] group-hover:border-[#c1ff72] transition duration-300"
//               />
//               <p className="text-center text-sm sm:text-base text-[#c1ff72] font-medium">
//                 {skill.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;
import useReveal from "../hooks/useReveal";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    tag: "client",
    skills: [
      { name: "HTML", level: 70 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 50 },
      { name: "React.js", level: 50 },
      { name: "Tailwind CSS", level: 60 },
    ],
  },
  {
    category: "Backend",
    tag: "server",
    skills: [
      { name: "Node.js", level: 50 },
      { name: "MongoDB", level: 50 },
      { name: "PHP", level: 70 },
      { name: "MYSQL", level: 70 },
    ],
  },
  {
    category: "Tools & Workflow",
    tag: "tooling",
    skills: [
      { name: "Git & GitHub", level: 60 },
      { name: "Vercel & Netlify", level: 60 },
      { name: "VS Code", level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-mono text-sm text-paper">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-ink-soft overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-dim to-amber transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ group, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""} rounded-xl border border-ink-border bg-ink-panel p-7 hover:border-amber/40 hover:-translate-y-1 transition-all duration-300`}
      style={{ animationDelay: `${index * 140}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg font-semibold text-paper">
          {group.category}
        </h3>
        <span className="font-mono text-xs text-teal bg-teal/10 border border-teal/20 rounded-full px-2.5 py-1">
          {group.tag}
        </span>
      </div>
      <div className="space-y-5">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={visible ? skill.level : 0}
            delay={i * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="skills" className="relative py-24 bg-ink-soft/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "in-view" : ""} mb-16 text-center`}
        >
          <p className="font-mono text-sm text-amber mb-3">// skills.json</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
            What I Work With
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto">
            A snapshot of the languages, frameworks, and tools I reach for when
            turning an idea into a working product.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
