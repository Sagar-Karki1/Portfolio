import "animate.css";

import React from "react";
import HeroImg from "../assets/HeroImage.png";

import {
  FaArrowRight,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <div
        name="home"
        className="hero-container h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="wrapper max-w-screen-lg mx-auto flex flex-col justify-center h-full text-white md:flex-row pt-16 xs:pt-32">
          <div className="text-wrapper px-4 w-full mb-6 flex flex-col justify-center xs:py-3 md:w-3/5 md:mb-0 md:px-0">
            <div className="flex flex-col justify-center ">
              <h2 className="text-2xl md:text-4xl xs:text-3xl font-bold tracking-wider sm:text-6xl">
                I'm a Jr. Frontend Developer
              </h2>
              <p className="text-gray-400 mt-4 md:mt-7 text-xs max-w-md text-justify mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                suscipit quis explicabo qui, eveniet ut alias autem voluptatum
                ipsam aspernatur, dolorem rerum! Id, in tempore.
              </p>
            </div>
            <div className="flex justify-between ">
              <Link
                to="projects"
                smooth
                duration={500}
                className="group flex text-xs md:text-base items-center font-light xs:px-3 xs:text-sm py-2 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500 capitalize cursor-pointer "
              >
                portfolio
                <span className="ml-1 group-hover:rotate-90 duration-200">
                  <FaArrowRight />
                </span>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center text-xs md:text-base font-light xs:px-3 xs:text-sm rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500 capitalize cursor-pointer "
              >
                Download Resume
                <span className="ml-1">
                  <AiOutlineProfile />
                </span>
              </a>
            </div>
          </div>
          <div className="image-wrapper w-full flex justify-center items-center md:justify-end md:w-2/5">
            <img
              src={HeroImg}
              alt="Profile"
              className="rounded-2xl w-11/12 xs:w-[75%] "
            />
          </div>
        </div>
        <div className="social-links hidden md:block md:border-indigo-500 md:absolute md:top-[50%] -translate-y-2/4">
          <ul>
            <a
              href="https://github.com/Sagar-Karki1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-36 h-10 ml-[-100px] rounded-tr hover:rounded-br bg-gray-600 text-white px-2 py-2 hover:ml-[0] duration-300"
            >
              Github
              <span className="ml-3">
                <FaGithubSquare size={30} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-karki/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-36 h-10 ml-[-100px] hover:rounded-tr hover:rounded-br bg-gray-600 text-white px-2 py-2 hover:ml-[0] duration-300"
            >
              LinkedIn
              <span className="ml-3">
                <FaLinkedin size={30} />
              </span>
            </a>
            <a
              href="https://www.fb.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-36 h-10 ml-[-100px] rounded-br hover:rounded-tr bg-gray-600 text-white px-2 py-2 hover:ml-[0] duration-300"
            >
              Facebook
              <span className="ml-3">
                <FaFacebookSquare size={30} />
              </span>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
