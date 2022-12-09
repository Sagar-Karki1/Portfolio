import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false); //initially click is set to false

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="nav-wrapper w-full h-[10vh] bg-black fixed">
        <div className="flex justify-between items-center max-w-screen-lg w-full  h-full text-white mx-auto ">
          <div>
            <h1 className="text-4xl font-signature font-bold pl-4">Sagar</h1>
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link
                to={link}
                smooth
                duration={500}
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-300"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            onClick={() => setClick(!click)}
          >
            {click ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          {/* ifclick is true then the following elements will be displayed */}
          {click && (
            <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800">
              {links.map(({ id, link }) => (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  className="px-4 py-6 text-3xl cursor-pointer capitalize text-gray-500"
                  onClick={() => setClick(!click)}
                >
                  {link}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
