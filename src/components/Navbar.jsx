import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const navOption = [
    {
      name: "Home",
      logo: <IoHome />,
    },
    {
      name: "About",
      logo: <BsPersonFill />,
    },
    {
      name: "Portfolio",
      logo: <FaProjectDiagram />,
    },
    {
      name: "Contact",
      logo: <MdContacts />,
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[230px] sm:w-fit bg-[#6d380730] border-2 border-[#ffae00] backdrop-blur-lg z-50 flex justify-between items-center shadow-lg rounded-full px-4 sm:px-6 py-2 gap-8 sm:gap-10">
      {navOption.map(({ name, logo }, ind) => (
        <NavLink
          key={ind}
          to={name != "Home" ? `/${name.toLowerCase()}` : "/"}
          className={(props) =>
            props.isActive
              ? `text-[#ffae00] hover:text-[#ce8500] text-2xl flex items-center justify-center gap-1.5 transition-all`
              : `text-white hover:text-gray-300 text-2xl flex items-center justify-center gap-1.5 transition-all`
          }
        >
          {logo} <span className="hidden sm:block">{name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
