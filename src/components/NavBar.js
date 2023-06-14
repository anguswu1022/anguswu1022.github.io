import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "01. Home",
      to: "/",
    },
    {
      id: 2,
      link: "02. Projects",
      to: "/projects",
    },
    {
      id: 3,
      link: "03. Skills",
      to: "/skills",
    },
    {
      id: 4,
      link: "04. About",
      to: "/about",
    },
    {
      id: 5,
      link: "05. Contact",
      to: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-cream text-black fixed">
      <NavLink to="/" className="w-40 h-40 pt-8 sm:w-40 sm:h-40 cursor-pointer">
        <img src={logo} alt="" />
      </NavLink>

      <ul className="hidden md:flex">
        {links.map(({ id, link, to }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-xl font-bold pt-4 text-black transition duration-150 border-b-4 border-transparent hover:border-black"
          >
            <NavLink to={to} activeClassName="active" className="text-black">
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 textgray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-white">
          {links.map(({ id, link, to }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              <NavLink
                to={to}
                activeClassName="active"
                className="text-black"
                onClick={() => setNav(false)}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
