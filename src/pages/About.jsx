import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="about-container w-full max-h-max bg-gradient-to-b from-gray-800 to-black text-white "
      >
        <div className="about-wrapper max-w-screen-lg mx-auto px-4 pt-20 pb-12  md:px-0">
          <div className="about-heading mb-6 flex justify-center">
            <h3 className="text-4xl font-bold border-b-2 border-gray-500">
              About
            </h3>
          </div>
          <div className="about-paragraph text-gray-500">
            <p className="mt-18 text-xl text-justify">
              Hi, I am Sagar Karki currently living in Jhapa, Nepal. I am a Jr.
              Frontend Developer. I have recently completed my bachelor in
              Computer Science and Information Technology (BSc. CSIT) from
              Birendra Memorial College, Dharan. As a fresher graduate,
              currently I don't have any experience working in the related
              field.
              <br />
              My Interests are in Frontend develpoment, turning the beautiful
              designs in the form of code understand by the browser.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
