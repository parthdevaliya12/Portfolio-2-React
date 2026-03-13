import { Github, Linkedin, Facebook } from "lucide-react";
import React from "react";
import { ReactTyped } from "react-typed";
// import profile from "../assets/profile.jpg";
import profile from "../assets/myphoto2.jpeg";

const Hero = () => {
  const connect = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const github = () => window.open("https://github.com/parthdevaliya12");
  const linkedin = () =>
    window.open("https://www.linkedin.com/in/parthdevaliya12");
  const facebook = () =>
    window.open("https://www.facebook.com/parthdevaliya12");

  return (
    <div
      className="w-full max-w-screen-xl mx-auto min-h-screen
      flex flex-col md:flex-row justify-center items-center
      gap-10 px-4 sm:px-6 lg:px-10
      pt-24 pb-28"
      id="home"
    >
      {/* Profile */}
      <div
        className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52
          rounded-full p-[3px]
          border-4 border-[#c1ff72]
          animate-[pulseBorder_2s_ease-in-out_infinite]"
      >
        <img
          src={profile}
          alt="Parth"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div
        className="flex flex-col gap-4 text-center md:text-left max-w-lg
      animate-[fadeUp_1s_ease-out]"
      >
        <p className="text-xl sm:text-2xl animate-pulse">Hi, there</p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          I'm Parth Devaliya
        </h1>

        <p className="text-xl sm:text-2xl">
          <span className="text-[#c1ff72]">
            <ReactTyped
              strings={["Web Developer", "Frontend Developer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
        </p>

        <p className="text-sm sm:text-base text-gray-300">
          Frontend-focused developer turning ideas into interactive digital
          experiences. Continuously learning backend technologies to become a
          complete Full Stack Developer.
        </p>

        {/* Icons */}
        <div className="flex gap-4 justify-center md:justify-start mt-3">
          <Linkedin
            onClick={linkedin}
            className="text-[#c1ff72] cursor-pointer
            border-2 border-[#c1ff72] rounded-full
            p-3 h-10 w-10 sm:h-12 sm:w-12
            transition-all duration-300
            hover:scale-125
            hover:shadow-[0_0_20px_#c1ff72]
            animate-[float_5s_ease-in-out_infinite]"
          />

          <Github
            onClick={github}
            className="text-[#c1ff72] cursor-pointer
            border-2 border-[#c1ff72] rounded-full
            p-3 h-10 w-10 sm:h-12 sm:w-12
            transition-all duration-300
            hover:scale-125
            hover:shadow-[0_0_20px_#c1ff72]
            animate-[float_6s_ease-in-out_infinite]"
          />

          <Facebook
            onClick={facebook}
            className="text-[#c1ff72] cursor-pointer
            border-2 border-[#c1ff72] rounded-full
            p-3 h-10 w-10 sm:h-12 sm:w-12
            transition-all duration-300
            hover:scale-125
            hover:shadow-[0_0_20px_#c1ff72]
            animate-[float_7s_ease-in-out_infinite]"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center md:justify-start">
          <a
            href="parth-cv.pdf"
            className="bg-[#c1ff72] text-black px-6 py-2 rounded-full
            text-sm sm:text-base
            transition hover:scale-110 hover:shadow-[0_0_20px_#c1ff72]"
          >
            Download Resume
          </a>

          <button
            onClick={connect}
            className="bg-[#c1ff72] text-black px-6 py-2 rounded-full
            text-sm sm:text-base
            transition hover:scale-110 hover:shadow-[0_0_20px_#c1ff72]"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
