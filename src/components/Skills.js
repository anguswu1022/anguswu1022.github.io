import React from "react";
import HTML from "../images/HTML.svg";
import CSS from "../images/CSS.svg";
import Git from "../images/Git.svg";
import JavaScript from "../images/JavaScript.svg";
import PostgreSQL from "../images/PostgreSQL.svg";
import Python from "../images/Python.svg";
import ReactIcon from "../images/React.svg";
import Tailwind from "../images/Tailwind.svg";

const skills = [
  { id: 1, name: "HTML", icon: HTML },
  { id: 2, name: "CSS", icon: CSS },
  { id: 3, name: "JavaScript", icon: JavaScript },
  { id: 4, name: "Git", icon: Git },
  { id: 5, name: "PostgreSQL", icon: PostgreSQL },
  { id: 6, name: "Tailwind", icon: Tailwind },
  { id: 7, name: "Python", icon: Python },
  { id: 8, name: "React", icon: ReactIcon },
];

const Skills = () => {
  return (
    <div className="w-full h-screen bg-cream text-black">
      <div className="max-w-[1000px] mx-auto my-[-50px] p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold text-center border-b-4 border-gray-600">
            Skills
          </p>
          <p className="text-center text-xl pt-2">
            Here are some of the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 sm:py-2">
          {skills.map(({ id, name, icon }) => (
            <div className="hover:scale-110 duration-500" key={id}>
              <img className="mx-auto w-48" src={icon} alt="HTML icon" />
              <p className="my-[-30px]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
