import React from "react";

const About = () => {
  return (
    <>
      <div
        className="min-h-[500px] flex flex-col justify-center items-center mb-16 px-4 sm:px-6 lg:px-8"
        id="about"
        data-aos="flip-left"
      >
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c1ff72] mb-8 sm:mb-10 tracking-wide text-center">
          About Me
        </h2>

        <div
          className="group relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]
          bg-[#111111] border border-[#1f1f1f] rounded-xl
          shadow-lg shadow-black
          transition-all duration-300
          hover:shadow-[#c1ff72]/20 hover:border-[#c1ff72] hover:-translate-y-2"
        >
          <div className="p-5 sm:p-6 md:p-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#c1ff72] leading-7 sm:leading-8 md:leading-9 text-left">
              Hi, I’m Parth, and I am currently pursuing my MCA (Master of
              Computer Applications). I am passionate about computer science and
              web development. As a fresher, I am learning and improving my skills
              every day. I have good knowledge of frontend development like HTML,
              CSS, JavaScript, and React. I enjoy creating responsive and
              user-friendly websites. I have basic knowledge of backend
              technologies, and I am working to improve it. I am also learning
              about databases and full-stack development. During my studies, I
              have learned about Data Structures, OOP, and DBMS. I like writing
              clean and simple code. My hobbies are playing cricket, coding, and
              learning new technologies. I always try to improve my skills and
              gain practical experience. My goal is to become a successful
              full-stack developer in the future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
