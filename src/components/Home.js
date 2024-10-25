import React from "react";
import "../assets/styles/home.css";
import TypingEffect from "./Typing";
import image3 from "../assets/images/image-2.avif";

const Home = (props) => {
  const words = [
    "Full Stack Developer.",
    "UI-UX Designer.",
    "Web Developer.",
    "Backend Developer.",
    "ReactJs Enthusiast.",
    "Problem Solver.",
    "Coder.",
  ];

  const socialIcons = [
    {
      icon: "fa-brands fa-github",
      link: "https://www.github.com/zaidkhan13/",
    },
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/zaidalikhan31/",
    },
    {
      icon: "fa-solid fa-envelope",
      link: "mailto:zaidalikhan012@gmail.com",
    },
  ];

  return (
    <div className="my-outer-container d-flex flex-column justify-content-center px-4 py-5">
      <header className="app-header">
        <div className="my-inner-container d-flex text-light">
          <div className="home-left">
            <h1 className="text-48 fw-700 my-3">{props.title}</h1>
            <p className="text-28 mb-5">
              I am a passionate <TypingEffect words={words} />
            </p>
            <div className="social-links d-flex mb-3">
              {socialIcons.map((element, index) => {
                return (
                  <a
                    className="td-n"
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    href={element.link}
                  >
                    <div className="social-icon mx-2">
                      <i className={element.icon}></i>
                    </div>
                  </a>
                );
              })}
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
