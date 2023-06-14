import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const top = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 300,
    config: { duration: 1000 },
  });
  const name = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 1000,
    config: { duration: 1000 },
  });
  const middle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 1700,
    config: { duration: 1000 },
  });
  const bottom = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 2400,
    config: { duration: 1000 },
  });

  return (
    <div className="h-screen w-full bg-cream ">
      <div className="max-h-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <animated.div style={top}>
            <h3 className="text-2xl sm:text-3xl text-black font-hometext">
              Hi there! I'm
            </h3>
          </animated.div>
          <animated.div style={name}>
            <h1 className="text-7xl sm:text-9xl font-bold text-black font-hometext pt-5">
              Angus Wu
            </h1>
          </animated.div>

          <animated.div style={middle}>
            <h2 className="text-2xl sm:text-4xl font-bold text-black font-hometext pt-10">
              I'm a Full-Stack Software Engineer
            </h2>
          </animated.div>
          <animated.div style={bottom}>
            <h3 className="text-xl sm:text-2xl text-black my-2 font-hometext pt-4">
              I have experience in Python, React.js, FastAPI, JavaScript,
              PostgreSQL, JavaScript, and more.
            </h3>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-6 text-xl flex items-center rounded-md  bg-black">
                <a href="mailto:anguswu19@gmail.com">Get in touch</a>
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
