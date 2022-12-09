import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import BootstrapLogo from "../assets/bootstrap.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      imgSrc: Html,
      logoName: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      imgSrc: Css,
      logoName: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      imgSrc: Javascript,
      logoName: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      imgSrc: BootstrapLogo,
      logoName: "Bootsrap",
      style: "shadow-indigo-600",
    },
    {
      id: 5,
      imgSrc: TailwindLogo,
      logoName: "Tailwind Css",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      imgSrc: ReactLogo,
      logoName: "React",
      style: "shadow-blue-600",
    },
  ];
  return (
    <>
      <div
        name="skills"
        className="skills-container w-ful max-h-max bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="skill-wrapper pb-4 pt-20 md:pt-20 px-4 h-full flex flex-col justify-center max-w-screen-lg mx-auto">
          <div className="skill-heading flex justify-center">
            <h3 className="border-b-2 border-gray-500 text-4xl font-bold text-white">
              Skills
            </h3>
          </div>
          <div className="logo-wrapper w-full grid  sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-14 py-8">
            {skills.map(({ id, imgSrc, logoName, style }) => (
              <div
                key={id}
                className={`logo-div shadow-md py-2 rounded-lg ${style}`}
              >
                <img src={imgSrc} alt={logoName} className="h-36 mx-auto" />
                <p className="mt-4 text-white text-center">{logoName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
