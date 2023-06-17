import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-cream text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-[-40px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl ">
          Hello, I'm Angus, a full-stack software engineer trained through the
          Immersive Software Engineering program at Hack Reactor. Coming from a
          background in biochemistry, I've always been captivated by the
          intricate problem-solving nature.
        </p>
        <br />
        <p className="text-xl">
          Now, as a software engineer, I'm excited to combine my unique
          perspective and attention to detail with my passion for developing
          creative projects.The transition from biochemistry to software
          engineering has been an exciting journey, and I'm eager to make a
          genuine impact in this dynamic field.
        </p>
      </div>
    </div>
  );
};

export default About;
