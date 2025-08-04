import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/Photo.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const typewriterTexts = [
    "Fullstack Developer",
    "Cloud Enthusiast",
    "DevOps Beginner",
    "Competitive Programmer"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen text-white font-bold overflow-hidden relative pt-8 pb-20 px-4">
      <div className="border-2 border-[#333] backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-5xl">
        <div className="flex items-center justify-between flex-col-reverse sm:flex-row gap-8 mb-8">
          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold mb-6 text-left">
              Hello, I'm <br />
              <span className="mb-4 inline-block bg-gradient-to-r from-[#ffae00] to-[#ce8500] bg-clip-text text-transparent text-4xl md:text-5xl">
                Naresh Adhe
              </span>
              <br />
              <Typewriter
                words={typewriterTexts}
                loop
                cursor
                cursorStyle="|"
                cursorColor="#ffae00"
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h1>
            <p className="text-lg text-gray-300 mb-8 text-left leading-relaxed">
              A passionate <span className="text-[#ffae00] font-semibold">full-stack developer</span> specializing in modern  <span className="text-[#ffae00] font-semibold">web applications</span>
              . I create impactful solutions that blend beautiful
              interfaces with <span className="text-[#ffae00] font-semibold">robust backend systems</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start cursor-pointer">
              <Link
                to="/portfolio"
                className="text-center relative bg-gradient-to-r from-[#ffae00] to-[#ce8500] hover:bg-gradient-to-r hover:from-[#ce8500] hover:to-[#ffae00] text-white font-bold text-lg py-3 px-8 rounded-lg transition-all hover:animate-pulse"
              >
                View My Work
              </Link>
              <a
                href="/Naresh_Adhe_Resume.pdf"
                download="Naresh_Adhe_Resume.pdf"
                className="overflow-hidden relative bg-[#000] hover:bg-[#111111] font-bold text-white text-lg py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <div className="spin-border"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 animate-bounce"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <img
            src={Photo}
            alt="Naresh"
            className="w-64 h-64 rounded-full object-cover border-4 border-[#ffae00] shadow-lg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
