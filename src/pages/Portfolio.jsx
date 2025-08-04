import React from "react";
import XPENSIMG from "../assets/XPENS.png";
import FoodDel from "../assets/FoodDel.png";
import Obys from "../assets/Obys.png";
import PortfolioImg from "../assets/Portfolio.png";
import TicTacToe from "../assets/TicTacToe.png";
import Tailwind from "/tailwind.svg";
import HTML from "/html.svg";
import CSS from "/css.svg";
import JavaScript from "/javascript.svg";
import Express from "/express.svg";
import Mongo from "/mongo.svg";
import ReactPhoto from "/react.svg";
import { Link } from "react-router-dom";
import Node from "/node.svg";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio",
    description:
      "A fully responsive personal portfolio website showcasing my skills, projects, and experiences. Built with modern web technologies like React.js and Tailwind CSS, it features a sleek UI, smooth animations, and optimized performance. ",
    image: PortfolioImg,
    techStack: [ReactPhoto,Tailwind],
    liveLink: "https://nareshadhe.vercel.app/",
    github: "https://github.com/NareshAdhe/Portfolio",
  },
  {
    name: "XPENS",
    description:
      "XPENS is a modern blogging web app. It provides a seamless experience for users to create, read, and manage blogs efficiently. With a sleek UI and optimized performance, XPENS ensures a smooth and engaging content-sharing platform.",
    image: XPENSIMG,
    techStack: [Mongo, Express, ReactPhoto, Node],
    liveLink: "https://xpensfrontend.vercel.app/",
    github: "https://github.com/NareshAdhe/XPENS",
  },
  {
    name: "FoodDel",
    description:
      "Food Del is an intuitive food delivery web app. It offers a seamless experience for users to browse, order, and track their favorite meals. With a sleek UI and optimized performance, Food Del ensures a smooth food ordering experience.",
    image: FoodDel,
    techStack: [Mongo, Express, ReactPhoto, Node],
    liveLink: "https://food-del-steel.vercel.app/",
    github: "https://github.com/NareshAdhe/Food-Del",
  },
  {
    name: "Obys Agency",
    description:
      "Obys Agency is a sleek and modern website clone built using HTML, CSS, and GSAP. It replicates the smooth animations and interactive design of the original Obys Agency site.",
    image: Obys,
    techStack: [HTML, CSS, JavaScript],
    liveLink: "https://obys-agency-kohl.vercel.app/",
    github: "https://github.com/NareshAdhe/Obys-Agency-Clone",
  },
  {
    name: "Tic Tac Toe",
    description:
      "interface for users to enjoy the timeless game. With a responsive design and smooth gameplay, Tic Tac Toe ensures a fun and interactive experience.This game is designed to be realistic.",
    image: TicTacToe,
    techStack: [ReactPhoto, CSS],
    liveLink: "https://tic-tac-toe-ecru-phi-62.vercel.app/",
    github: "https://github.com/NareshAdhe/Tic-Tac-Toe",
  },
];

export default function Portfolio() {
  return (
    <section className="pt-8 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#ffae00]">
        My Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/20  border border-[#ffae00] p-6 backdrop-blur-sm rounded-lg shadow-lg max-w-sm mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="w-full h-56 relative mb-4 border border-[#444] rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center bg-white px-3 w-fit gap-2 py-1 rounded-full mb-6">
              {project.techStack.map((tech, i) => (
                <img key={i} src={tech} className="h-6 w-6 rounded-full"></img>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-fit"
              >
                Github{" "}
                <span>
                  <FaGithub />
                </span>
              </Link>
              <Link
                to={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-fit"
              >
                Live{" "}
                <span>
                  <FiExternalLink />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
