import React from "react";
import Food from "../assets/food-project.jpg";
import Weather from "../assets/weather-project.png";
import Ecommerce from "../assets/ecommerce-project.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Food,
      AppName: "Food App",
    },
    {
      id: 2,
      src: Weather,
      AppName: "Weather App",
    },
    {
      id: 3,
      src: Ecommerce,
      AppName: "Ecommerce App",
    },
    {
      id: 4,
      src: Food,
      AppName: "Food App",
    },
    {
      id: 5,
      src: Weather,
      AppName: "Weather App",
    },
    {
      id: 6,
      src: Ecommerce,
      AppName: "Ecommerce App",
    },
  ];
  return (
    <>
      <div
        name="projects"
        className="project-container w-full max-h-max bg-gradient-to-b from-gray-800 to-black pt-16"
      >
        <div className="project-wrapper text-white max-w-screen-lg mx-auto px-4 pb-16 md:px-0">
          <div className="project-heading flex justify-center">
            <h3 className="text-4xl font-bold border-b-2 border-gray-500 mb-6">
              Projects
            </h3>
          </div>
          <div className="image-wrapper w-full grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-14">
            {projects.map(({ id, src, AppName }) => (
              <div
                key={id}
                className="img-div w-full h-[260px] md:w-[290px] md:h-[300px] duration-200 md:hover:scale-105 shadow-md shadow-gray-600 rounded-md"
              >
                <img
                  src={src}
                  alt="food"
                  className="w-full h-[70%] object-cover   rounded-tl-md rounded-tr-md  md:opacity-60  md:hover:opacity-100"
                />
                <div className="project-name px-2 h-[15%]">
                  <h3 className="text-md xs:text-xl font-medium px-1 py-1">
                    {AppName}
                  </h3>
                </div>
                <div className="links-wrapper   flex justify-between px-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] xs:text-xs px-2 py-1 border-2 rounded-md  hover:bg-white hover:text-gray-700 hover:font-medium"
                  >
                    View Code on Github
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] xs:text-xs px-2 py-1 border-2 rounded-md hover:bg-white hover:text-gray-700 hover:font-medium"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
