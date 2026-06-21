// import React from "react";
// import logo from "../assets/logo2.png";

// const Navbar = () => {
//   const connect = () => {
//     const section = document.getElementById("contact");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">

//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
//           <h1 className="text-white text-lg sm:text-2xl">Parth</h1>
//         </div>

//         <button
//           onClick={connect}
//           className="bg-[#c1ff72] text-black text-xs sm:text-base
//           px-4 sm:px-6 py-1.5 sm:py-2 rounded-full
//           transition hover:shadow-[0_0_12px_#c1ff72] hover:scale-105"
//         >
//           Hire Me
//         </button>
//       </div>

//       <hr className="border-gray-700" />
//     </div>
//   );
// };

// export default Navbar;
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-ink-border shadow-[0_1px_0_0_rgba(244,183,64,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        {/* Logo styled like an editor tab */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="group flex items-center gap-2 font-display text-lg font-semibold text-paper"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-soft border border-ink-border text-amber font-mono text-sm group-hover:border-amber/50 transition-colors">
            &lt;/&gt;
          </span>
          <span>
            parth<span className="text-amber">.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative pb-1 transition-colors duration-200 ${
                  active === link.href
                    ? "text-amber"
                    : "text-muted hover:text-paper"
                }`}
              >
                <span className="text-amber/60 mr-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-amber transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button (desktop) */}
        <a
          href="#contact"
          onClick={() => handleClick("#contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-amber/40 px-4 py-2 font-mono text-sm text-amber hover:bg-amber hover:text-ink transition-all duration-200"
        >
          Let's talk
          <span aria-hidden="true">→</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-ink-panel border-b border-ink-border ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`block py-1 ${
                  active === link.href ? "text-amber" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => handleClick("#contact")}
              className="inline-flex items-center gap-2 rounded-md border border-amber/40 px-4 py-2 text-amber"
            >
              Let's talk →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
