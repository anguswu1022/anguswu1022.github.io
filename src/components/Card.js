import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, src, stack, description, website, link }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="group h-96 w-[46rem] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={src}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="text-base">{stack}</p>
              <p className="text-sm mt-6">{description}</p>
              <div className="flex">
                {id === 1 && (
                  <button className="mt-4 mr-4 rounded-md bg-gray-200 text-black py-1 px-2 text-sm hover:bg-gray-300">
                    <Link
                      to={website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </Link>
                  </button>
                )}
                <button className="mt-4 rounded-md bg-gray-200 text-black py-1 px-2 text-sm hover:bg-gray-300">
                  <Link to={link} target="_blank" rel="noopener noreferrer">
                    Repository
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
