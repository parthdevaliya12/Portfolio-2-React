// import { Github, Linkedin, Facebook } from "lucide-react";
// import React from "react";
// import { ReactTyped } from "react-typed";
// // import profile from "../assets/profile.jpg";
// import profile from "../assets/myphoto2.jpeg";

// const Hero = () => {
//   const connect = () => {
//     const section = document.getElementById("contact");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const github = () => window.open("https://github.com/parthdevaliya12");
//   const linkedin = () =>
//     window.open("https://www.linkedin.com/in/parthdevaliya12");
//   const facebook = () =>
//     window.open("https://www.facebook.com/parthdevaliya12");

//   return (
//     <div
//       className="w-full max-w-screen-xl mx-auto min-h-screen
//       flex flex-col md:flex-row justify-center items-center
//       gap-10 px-4 sm:px-6 lg:px-10
//       pt-24 pb-28"
//       id="home"
//     >
//       {/* Profile */}
//       <div
//         className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52
//           rounded-full p-[3px]
//           border-4 border-[#c1ff72]
//           animate-[pulseBorder_2s_ease-in-out_infinite]"
//       >
//         <img
//           src={profile}
//           alt="Parth"
//           className="h-full w-full rounded-full object-cover"
//         />
//       </div>

//       {/* Info */}
//       <div
//         className="flex flex-col gap-4 text-center md:text-left max-w-lg
//       animate-[fadeUp_1s_ease-out]"
//       >
//         <p className="text-xl sm:text-2xl animate-pulse">Hi, there</p>

//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
//           I'm Parth Devaliya
//         </h1>

//         <p className="text-xl sm:text-2xl">
//           <span className="text-[#c1ff72]">
//             <ReactTyped
//               strings={["Web Developer", "Frontend Developer"]}
//               typeSpeed={60}
//               backSpeed={40}
//               loop
//             />
//           </span>
//         </p>

//         <p className="text-sm sm:text-base text-gray-300">
//           Frontend-focused developer turning ideas into interactive digital
//           experiences. Continuously learning backend technologies to become a
//           complete Full Stack Developer.
//         </p>

//         {/* Icons */}
//         <div className="flex gap-4 justify-center md:justify-start mt-3">
//           <Linkedin
//             onClick={linkedin}
//             className="text-[#c1ff72] cursor-pointer
//             border-2 border-[#c1ff72] rounded-full
//             p-3 h-10 w-10 sm:h-12 sm:w-12
//             transition-all duration-300
//             hover:scale-125
//             hover:shadow-[0_0_20px_#c1ff72]
//             animate-[float_5s_ease-in-out_infinite]"
//           />

//           <Github
//             onClick={github}
//             className="text-[#c1ff72] cursor-pointer
//             border-2 border-[#c1ff72] rounded-full
//             p-3 h-10 w-10 sm:h-12 sm:w-12
//             transition-all duration-300
//             hover:scale-125
//             hover:shadow-[0_0_20px_#c1ff72]
//             animate-[float_6s_ease-in-out_infinite]"
//           />

//           <Facebook
//             onClick={facebook}
//             className="text-[#c1ff72] cursor-pointer
//             border-2 border-[#c1ff72] rounded-full
//             p-3 h-10 w-10 sm:h-12 sm:w-12
//             transition-all duration-300
//             hover:scale-125
//             hover:shadow-[0_0_20px_#c1ff72]
//             animate-[float_7s_ease-in-out_infinite]"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center md:justify-start">
//           <a
//             href="parth-cv.pdf"
//             className="bg-[#c1ff72] text-black px-6 py-2 rounded-full
//             text-sm sm:text-base
//             transition hover:scale-110 hover:shadow-[0_0_20px_#c1ff72]"
//           >
//             Download Resume
//           </a>

//           <button
//             onClick={connect}
//             className="bg-[#c1ff72] text-black px-6 py-2 rounded-full
//             text-sm sm:text-base
//             transition hover:scale-110 hover:shadow-[0_0_20px_#c1ff72]"
//           >
//             Hire Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import { useEffect, useState } from "react";

const ROLES = ["Full Stack Developer", "Web Designer", "Web Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect cycling through roles
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        65,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        35,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-ink"
    >
      {/* Ambient dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-sm opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />

      {/* Glow accents */}
      <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-amber/10 blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl animate-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center w-full">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Available for new opportunities
          </div>

          <p className="font-mono text-sm text-amber mb-3">Hi, my name is</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper leading-[1.1]">
            Parth Devaliya
          </h1>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-muted mt-2 h-12">
            <span className="text-amber">
              {text}
              <span className="border-r-2 border-amber ml-0.5 animate-blink" />
            </span>
          </h2>

          <p className="font-body text-muted mt-6 max-w-lg leading-relaxed">
            I am an aspiring Full Stack Developer currently pursuing MCA. I
            enjoy learning modern technologies and building efficient,
            responsive, and maintainable web applications.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-mono text-sm font-medium text-ink hover:bg-amber-dim hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_0_0_rgba(244,183,64,0)] hover:shadow-[0_8px_24px_-4px_rgba(244,183,64,0.4)]"
            >
              View Projects
            </a>
            <a
              href="/PARTH_DEVALIYA_RESUME.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-6 py-3 font-mono text-sm text-paper hover:border-amber/50 hover:text-amber transition-all duration-200"
            >
              View resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-10">
            {[
              { label: "GitHub", href: "https://github.com/parthdevaliya12" },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/parthdevaliya12",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-amber transition-colors underline-offset-4 hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: signature editor window */}
        <div className="relative animate-float">
          <div className="rounded-xl border border-ink-border bg-ink-panel shadow-2xl shadow-black/40 overflow-hidden">
            {/* Tab bar */}
            <div className="flex items-center gap-2 bg-ink-soft border-b border-ink-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-muted">
                about-me.jsx
              </span>
            </div>

            {/* Code body */}
            <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <p>
                <span className="text-teal">const</span>{" "}
                <span className="text-paper">developer</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-muted">{"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-amber">name:</span>{" "}
                <span className="text-[#9DC97E]">"Parth Devaliya"</span>
                <span className="text-muted">,</span>
              </p>
              <p className="pl-4">
                <span className="text-amber">role:</span>{" "}
                <span className="text-[#9DC97E]">"Full Stack Developer"</span>
                <span className="text-muted">,</span>
              </p>
              <p className="pl-4">
                <span className="text-amber">stack:</span>{" "}
                <span className="text-muted">[</span>
                <span className="text-[#9DC97E]">"React"</span>
                <span className="text-muted">, </span>
                <span className="text-[#9DC97E]">"Tailwind"</span>
                <span className="text-muted">, </span>
                <span className="text-[#9DC97E]">"Node"</span>
                <span className="text-muted">],</span>
              </p>
              <p className="pl-4">
                <span className="text-amber">passion:</span>{" "}
                <span className="text-[#9DC97E]">"clean code & UI"</span>
                <span className="text-muted">,</span>
              </p>
              <p className="pl-4">
                <span className="text-amber">basedIn:</span>{" "}
                <span className="text-[#9DC97E]">"India"</span>
                <span className="text-muted">,</span>
              </p>
              <p>
                <span className="text-muted">{"}"}</span>
                <span className="text-muted">;</span>
              </p>
              <p className="mt-3 text-muted">
                <span className="text-teal">export default</span> developer
                <span className="border-r-2 border-amber ml-1 animate-blink">
                  &nbsp;
                </span>
              </p>
            </div>
          </div>

          {/* Floating tag accents */}
          <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-1.5 rounded-md bg-ink-panel border border-ink-border px-3 py-1.5 font-mono text-xs text-teal shadow-lg">
            ● Build passing
          </div>
          <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-1.5 rounded-md bg-ink-panel border border-ink-border px-3 py-1.5 font-mono text-xs text-amber shadow-lg">
            Fresher
          </div>
        </div>
      </div>
    </section>
  );
}
