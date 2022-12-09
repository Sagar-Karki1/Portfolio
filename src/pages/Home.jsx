import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Home;
