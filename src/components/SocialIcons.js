import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <ul className="flex flex-row bottom-32 pl-4 relative">
      <li className="flex justify-between items-center w-25vw px-8 h-16 bg-cream">
        <a
          className="flex justify-between items-center w-full text-black hover:scale-105 duration-200"
          href="https://linkedin.com/in/angus-wu10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={60} />
        </a>
      </li>
      <li className="flex justify-between items-center w-25vw h-18 pr-10 bg-cream pt-2">
        <a
          className="flex justify-between items-center w-full text-black hover:scale-105 duration-200"
          href="https://gitlab.com/anguswu1022"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGitlab size={58} />
        </a>
      </li>
      <li className="flex justify-between items-center w-25vw h-14 bg-cream pt-4">
        <a
          className="flex justify-between items-center w-full text-black hover:scale-105 duration-200"
          href="/Resume.pdf"
          download
        >
          <BsFillPersonLinesFill size={60} />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
