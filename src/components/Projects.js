import React, { useState } from "react";
import CarCar from "../images/CarCar.svg";
import MusicPlayer from "../images/MusicPlayer.svg";
import PlayBoxx from "../images/PlayBoxx.svg";
import Scrumptious from "../images/ScrumptiousRecipes.svg";
import Zenith from "../images/Zenith.svg";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "react-feather";

const projects = [
  {
    id: 1,
    name: "PlayBoxx",
    src: PlayBoxx,
    stack: "#React #FastAPI #PostgreSQL #Redux #TailwindCSS #Three.js",
    description: "Web application featuring a variety of browser-based games",
    website: "https://playboxx.gitlab.io/play-boxx/",
    link: "https://gitlab.com/playboxx/play-boxx",
  },
  {
    id: 2,
    name: "CarCar",
    src: CarCar,
    stack: "#Django #React #Python #JavaScript",
    description:
      "Application to manage car sales, services, and inventory for a car dealership",
    link: "https://gitlab.com/anguswu1022/carcar",
  },
  {
    id: 3,
    name: "Music Player",
    src: MusicPlayer,
    stack: "#HTML #CSS #JavaScript",
    description:
      "Play music stored in a music folder in a web-based application",
    link: "https://gitlab.com/anguswu1022/music_player",
  },
  {
    id: 4,
    name: "Zenith",
    src: Zenith,
    stack: "#Django #Bootstrap #Python #SQL",
    description: "Application to manage a user's projects and tasks",
    link: "https://gitlab.com/anguswu1022/zenith",
  },
  {
    id: 5,
    name: "Scrumptious Recipes",
    src: Scrumptious,
    stack: "#HTML #Django #Python",
    description: "Application to keep track of a user's favorite recipes",
    link: "https://gitlab.com/anguswu1022/scrumptious",
  },
];

const Projects = () => {
  const [curr, setCurr] = useState(0);

  const handleNextCard = () => {
    setCurr((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCard = () => {
    setCurr((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen bg-cream text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-24">
          <p className="text-4xl text-center font-bold border-b-4 border-gray-500 mb-10">
            Projects
          </p>
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="pr-8">
                <button
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  onClick={handlePrevCard}
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <Card
                id={projects[curr].id}
                name={projects[curr].name}
                src={projects[curr].src}
                stack={projects[curr].stack}
                description={projects[curr].description}
                website={projects[curr].website}
                link={projects[curr].link}
              />
              <div className="pl-8">
                <button
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  onClick={handleNextCard}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
