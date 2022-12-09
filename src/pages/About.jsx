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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              quidem qui velit quasi nam illo consequatur debitis ea porro cum
              nemo quae, in ducimus cupiditate laudantium ipsa atque molestiae
              eius provident error pariatur sunt modi aliquid fuga. Accusamus,
              sint iure?
            </p>
            <br />
            <p className="text-xl mt-10 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis rem quis ea eius quisquam quae perspiciatis nulla magni
              velit, cum distinctio recusandae, libero beatae deleniti dolore
              nobis. Voluptate similique, quae accusantium saepe vitae
              quibusdam, nobis mollitia debitis eum, id natus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
