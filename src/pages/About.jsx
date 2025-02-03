import React, { useState } from "react";
import Photo from "../assets/Photo.jpg";
import C from "/c.svg";
import Cpp from "/cpp.svg";
import HTML from "/html.svg";
import CSS from "/css.svg";
import JavaScript from "/javascript.svg";
import ReactPhoto from "/react.svg";
import Node from "/node.svg";
import Tailwind from "/tailwind.svg";
import Postman from "../assets/postman.png";
import Docker from "/docker.svg";
import Express from "/express.svg";
import Framer from "../assets/framer.png";
import Mysql from "/mysql.svg";
import Mongo from "/mongo.svg";
import Linux from "/linux.svg";

const skills = [
  { src: C, name: "C" },
  { src: Cpp, name: "C++" },
  { src: HTML, name: "HTML" },
  { src: CSS, name: "CSS" },
  { src: JavaScript, name: "JavaScript" },
  { src: ReactPhoto, name: "React" },
  { src: Node, name: "Node.js" },
  { src: Tailwind, name: "Tailwind" },
  { src: Mongo, name: "MongoDB" },
  { src: Mysql, name: "MySQL" },
  { src: Linux, name: "Linux" },
  { src: Docker, name: "Docker" },
  { src: Express, name: "Express" },
  { src: Framer, name: "Framer" },
  { src: Postman, name: "Postman" },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex items-center justify-center h-full w-full pt-8 px-4 pb-20">
      <div className="h-full sm:h-fit max-w-6xl flex flex-col items-center justify-center p-8 text-white border-2 border-[#333] rounded-2xl backdrop-blur-sm">
        <div className="flex gap-6 mb-8 ">
          <button
            className={`text-lg font-semibold py-2 px-3 rounded-lg cursor-pointer ${
              activeSection === "about"
                ? "bg-[#ffae00] text-black"
                : "bg-transparent text-[#ffae00] border-2 border-[#ffae00]"
            }`}
            onClick={() => setActiveSection("about")}
          >
            About Me
          </button>
          <button
            className={`text-lg font-semibold py-2 px-3 rounded-lg cursor-pointer ${
              activeSection === "education"
                ? "bg-[#ffae00] text-black"
                : "bg-transparent text-[#ffae00] border-2 border-[#ffae00]"
            }`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </button>
        </div>

        {activeSection === "about" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center">
            <div className="flex justify-center">
              <img
                src={Photo}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-[#ffae00] shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-[#ffae00] mb-4 text-left">
                About Me
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed text-left w-full">
                Hi, I'm{" "}
                <span className="text-[#ffae00] font-semibold">
                  Naresh Adhe
                </span>
                , a passionate{" "}
                <span className="text-[#ffae00]">Fullstack Developer </span>
                and <span className="text-[#ffae00]">DevOps Enthusiast</span>. I
                love building scalable web applications and optimizing
                performance. My journey began with{" "}
                <span className="text-[#ffae00]">competitive programming</span>,
                where I developed a deep appreciation for{" "}
                <span className="text-[#ffae00]">problem-solving</span> and
                algorithms. I enjoy tackling new challenges in both frontend and{" "}
                <span className="text-[#ffae00]">backend development</span>.
              </p>
            </div>
          </div>
        )}

        {activeSection === "education" && (
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-[#ffae00] mb-6 text-center">
              Education
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="flex flex-col bg-[#33333360] backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all border-2 border-[#9f5f00] hover:shadow-xl text-white">
                <h3 className="text-2xl font-bold text-[#ffae00] mb-1">
                  Bachelor of Technology
                </h3>
                <p className="text-lg mb-2">Walchand College Of Engineering,Sangli</p>
                <p className="text-lg font-semibold text-gray-200 mb-4">
                  Computer Science Engineering
                </p>
                <p className="text-lg font-semibold text-gray-300">CGPA: 9.03</p>
                <span className="text-gray-300">2023 - 2027</span>
              </div>

              <div className="flex flex-col bg-[#33333360] backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all border-2 border-[#9f5f00] hover:shadow-xl text-white">
                <h3 className="text-2xl font-bold text-[#ffae00] mb-1">
                  12th Grade
                </h3>
                <p className="text-lg font-semibold mb-2">SBES College Of Science, Sambhajinagar</p>
                <p className="text-lg font-semibold text-gray-300">Percentage: 69.50%</p>
                <span className="text-gray-300">2022</span>
              </div>

              <div className="flex flex-col bg-[#33333360] backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all border-2 border-[#9f5f00] hover:shadow-xl text-white">
                <h3 className="text-2xl font-bold text-[#ffae00] mb-1">
                  10th Grade
                </h3>
                <p className="text-lg font-semibold mb-2">Nutan Vidyalay Selu</p>
                <p className="text-lg font-semibold text-gray-300">Percentage: 96%</p>
                <span className="text-gray-300">2020</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 w-full">
          <h3 className="text-3xl font-bold text-[#ffae00] mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6 p-6 rounded-xl shadow-2xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-around items-center px-4 py-2 gap-2 rounded-lg border border-[#333] hover:scale-105 hover:border-[#ffae00] transition-all duration-300 w-[180px]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-700/45 rounded-full shadow-md">
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                </div>
                <span className="text-gray-300 font-[800] text-lg">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
