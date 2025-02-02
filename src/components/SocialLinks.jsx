import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="mt-8 mb-24 text-center">
      <p className="text-lg text-gray-400">
        Or you can connect with me on:
      </p>
      <div className="flex justify-center gap-8 mt-4">
        <Link to="https://github.com/nareshadhe" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[#ffae00] text-4xl hover:text-[#e89300] transition duration-300" />
        </Link>

        <Link to="https://www.linkedin.com/in/naresh-adhe-3b38b4292" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#ffae00] text-4xl hover:text-[#e89300] transition duration-300" />
        </Link>

        <Link to="https://www.instagram.com/naresh_adhe_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#ffae00] text-4xl hover:text-[#e89300] transition duration-300" />
        </Link>

        <Link to="https://leetcode.com/u/naresh_adhe" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-[#ffae00] text-4xl hover:text-[#e89300] transition duration-300" />
        </Link>

        <Link to="https://www.codechef.com/users/naresh_adhe" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="text-[#ffae00] text-4xl hover:text-[#e89300] transition duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;