// import React, { useState } from "react";
// import {
//   Home,
//   User,
//   Code,
//   Award,
//   Folder,
//   Contact,
//   Menu,
//   X,
// } from "lucide-react";

// const Footer = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
//       <hr className="border-gray-700" />

//       <div className="flex justify-between items-center px-4 py-2 sm:hidden">
//         <span className="text-white font-bold">Menu</span>
//         <button onClick={() => setOpen(!open)}>
//           {open ? (
//             <X className="text-white" />
//           ) : (
//             <Menu className="text-white" />
//           )}
//         </button>
//       </div>

//       <div
//         className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row justify-center items-center py-3`}
//       >
//         <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#skill">Skills</a>
//           </li>

//           <li>
//             <a href="#project">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//         <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-0 sm:ml-6">
//           © {new Date().getFullYear()} Parth Devaliya. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/parthdevaliya12" },
  { label: "LinkedIn", href: "https://linkedin.com/in/parthdevaliya12" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-ink-border bg-ink">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2 font-display text-base font-semibold text-paper"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-soft border border-ink-border text-amber font-mono text-sm">
              &lt;/&gt;
            </span>
            parth<span className="text-amber">.</span>dev
          </a>

          <ul className="flex items-center gap-6 font-mono text-sm text-muted">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-border text-muted hover:border-amber/50 hover:text-amber transition-all duration-200"
          >
            ↑
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-muted">
            © {year} Parth Gajjar. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            Built with <span className="text-amber">React</span> &{" "}
            <span className="text-teal">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
