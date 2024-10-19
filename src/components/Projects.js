import React from "react";
import "../assets/styles/projects.css";
import bootstrap from "../assets/images/Bootstrap.svg";
import react_image from "../assets/images/React.png";
import redux from "../assets/images/Redux.svg";
import express from "../assets/images/Express.png";
import mongodb from "../assets/images/MongoDB.svg";
import firebase from "../assets/images/firebase-2.png";
import project1 from "../assets/images/project-1_1_1_3.jpg";
import project2 from "../assets/images/project-2_2.jpg";
import project3 from "../assets/images/project-3_3.jpg";

const Projects = () => {
  return (
    <div className="my-outer-container px-4 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title mb-5">
          <h2 className="section-heading d-flex align-items-center">
            Projects <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">MY WORKS</p>
        </div>
        <div className="row">
          <div className="col-md-11 project-item">
            <div className="card mb-5" style={{ background: "#040404" }}>
              <div className="card-body project-container">
                <div
                  className="project-card"
                  style={{
                    backgroundImage: `url(${project1})`,
                  }}
                >
                  <div className="project-content">
                    <div className="project-skills">
                      <img className="skill" src={bootstrap} alt="Bootstrap" />
                      <img className="skill" src={react_image} alt="React" />
                      <img className="skill" src={redux} alt="Redux" />
                      <img className="skill" src={express} alt="Express" />
                      <img className="skill" src={mongodb} alt="MongoDB" />
                    </div>
                    <h5 className="card-title project-title">SkyWrite</h5>
                    <p className="card-text">
                      A cloud-based note-taking platform with real-time updates
                      and secure JWT authentication.
                    </p>
                    <a
                      className="text-light td-n"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SaikumarBlaze/SkyWrite"
                    >
                      <div className="github social-icon me-2">
                        <i className="fa-brands fa-github"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-11 project-item">
            <div className="card mb-5" style={{ background: "#040404" }}>
              <div className="card-body project-container">
                <div
                  className="project-card"
                  style={{
                    backgroundImage: `url(${project2})`,
                  }}
                >
                  <div className="project-content">
                    <div className="project-skills">
                      <img className="skill" src={bootstrap} alt="Bootstrap" />
                      <img className="skill" src={react_image} alt="React" />
                      <img className="skill" src={redux} alt="Redux" />
                      <img className="skill" src={express} alt="Express" />
                      <img className="skill" src={firebase} alt="Firebase" />
                    </div>
                    <h5 className="card-title project-title">ChatWave</h5>
                    <p className="card-text">
                      A messaging app with real-time delivery and Firebase
                      authentication.
                    </p>
                    <a
                      className="text-light td-n"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.github.com/SaikumarBlaze"
                    >
                      <div className="github social-icon me-2">
                        <i className="fa-brands fa-github"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 project-item">
            <div className="card" style={{ background: "#040404" }}>
              <div className="card-body project-container">
                <div
                  className="project-card"
                  style={{
                    backgroundImage: `url(${project3})`,
                  }}
                >
                  <div className="project-content">
                    <div className="project-skills">
                      <img className="skill" src={bootstrap} alt="Bootstrap" />
                      <img className="skill" src={react_image} alt="React" />
                      <img className="skill" src={redux} alt="Redux" />
                      <img className="skill" src={express} alt="Express" />
                      <img className="skill" src={mongodb} alt="MongoDB" />
                    </div>
                    <h5 className="card-title project-title">ExpensoTrack</h5>
                    <p className="card-text">
                      An expense tracking app with real-time updates and secure
                      backend services.
                    </p>
                    <a
                      className="text-light td-n"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.github.com/SaikumarBlaze"
                    >
                      <div className="github social-icon me-2">
                        <i className="fa-brands fa-github"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
