import React from "react";
import "../assets/styles/home.css";
import TypingEffect from "./Typing";
import image3 from "../assets/images/image-5.avif";

const Home = () => {
  const words = [
    "Full Stack Developer.",
    "UI-UX Designer.",
    "Web Developer.",
    "Backend Developer.",
    "ReactJs Enthusiast.",
    "Problem Solver.",
    "Coder.",
  ];

  return (
    <div className="my-outer-container d-flex flex-column justify-content-center px-4 py-5">
      <header className="app-header">
        <div className="my-inner-container d-flex text-light">
          <div className="home-left">
            <h1 className="text-48 fw-700 my-3">Halbar Sai Kumar</h1>
            <p className="text-28 mb-5">
              I am a passionate <TypingEffect words={words} />
            </p>
            <div className="social-links d-flex mb-3">
              <a
                className="td-n"
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/SaikumarBlaze"
              >
                <div className="github social-icon me-2">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <a
                className="td-n"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/saikumar452/"
              >
                <div className="linkedin social-icon mx-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </a>
              <a
                className="td-n"
                target="_blank"
                rel="noreferrer"
                href="https://leetcode.com/u/halbarsaikumar452/"
              >
                <div className="leetcode social-icon mx-2">
                  <i className="fa-solid fa-code"></i>
                </div>
              </a>
              <a
                className="td-n"
                target="_blank"
                rel="noreferrer"
                href="mailto:halbarsaikumar452@gmail.com"
              >
                <div className="mail social-icon mx-2">
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="home-right">
            <img className="img-3" src={image3} alt="coding-image" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
