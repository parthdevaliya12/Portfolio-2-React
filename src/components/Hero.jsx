import { DownloadIcon, Facebook, Github, Linkedin } from "lucide-react";
import React from "react";
import { ReactTyped } from "react-typed";
// import profile from "../assets/me.jpg";
import profile from "../assets/i.jpg";

const Hero = () => {
  const connect = () => window.scroll(0, 3500);
  const github = () => window.open("https://github.com/parthdevaliya12");
  const linkedin = () =>
    window.open("https://www.linkedin.com/in/parth-devaliya-570171353");
  const facebook = () =>
    window.open("https://www.facebook.com/parthdevaliya12");

  return (
    <div
      className="min-h-[600px] flex flex-col md:flex-row justify-center items-center gap-10 px-5 md:px-20"
      id="home"
      data-aos="flip-up"
    >
      {/* Profile */}
      <div className="profile flex justify-center items-center mt-5">
        <img
          src={profile}
          alt="Parth Devaliya"
          className=" h-40 w-40 rounded-full shadow-lg transition-transform hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
        <p className="text-2xl md:text-3xl">Hi, there</p>
        <h1 className="text-3xl md:text-5xl font-bold">I'm Parth Devaliya</h1>
        <p className="text-2xl md:text-3xl">
          <span className="text-[#c1ff72]">
            <ReactTyped
              strings={["Web Developer", "Frontend Developer", "Web Designer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
        </p>
        <p className="text-md md:text-lg mt-2">
          I am passionate about frontend development and building responsive,
          user-friendly websites with clean, maintainable code.
        </p>

        {/* Social Icons */}
        <div className="flex flex-row gap-5 justify-center md:justify-start mt-3">
          <Linkedin
            onClick={linkedin}
            className="text-[#c1ff72] cursor-pointer border-2 border-[#c1ff72] rounded-full p-4 h-12 w-12 hover:scale-110 transition shadow-[0_0_10px_#c1ff72]"
          />

          <Github
            onClick={github}
            className="text-[#c1ff72] cursor-pointer border-2 border-[#c1ff72] rounded-full p-4 h-12 w-12 hover:scale-110 transition shadow-[0_0_10px_#c1ff72]"
          />
          <Facebook
            onClick={facebook}
            className="text-[#c1ff72] cursor-pointer border-2 border-[#c1ff72] rounded-full p-4 h-12 w-12 hover:scale-110 transition shadow-[0_0_10px_#c1ff72]"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start mt-5">
          <a
            href="Resume.pdf"
            className="btn bg-[#c1ff72] text-black w-full p-3 rounded-full  text-xl text-center  md:w-auto transition hover:scale-105 hover:shadow-[0_0_10px_#c1ff72]"
          >
            Download CV
          </a>
          <button
            onClick={connect}
            className="btn bg-[#c1ff72] text-black rounded-full p-3 text-xl w-full md:w-[150px] transition hover:scale-105 hover:shadow-[0_0_10px_#c1ff72]"
          >
            Join me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
