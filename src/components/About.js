import React from "react";
import "../assets/styles/about.css";

const about = () => {
  return (
    <div className="my-outer-container px-4 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title">
          <h2 className="section-heading d-flex align-items-center">
            About <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">LEARN MORE ABOUT ME</p>
        </div>
        <div className="intro mt-40 mb-7">
          <p className="mb-40">
            I am a Computer Science graduate from IIITDM Jabalpur with a focus
            on Full Stack Development. I have experience in building web
            applications, working with cloud infrastructures, and optimizing
            development processes using CI/CD pipelines. I’m skilled at solving
            complex problems and delivering reliable solutions. I am actively
            seeking opportunities in web development where I can apply my skills
            and continue learning.
          </p>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">Birthday : &nbsp;</span> 28
                August 2002
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">Age : &nbsp;</span> 22
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">Degree : &nbsp;</span> B.Tech
                CSE
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">City : &nbsp;</span>{" "}
                Hyderabad, India
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">GitHub : &nbsp;</span>{" "}
                <a
                  className="td-n social-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/SaikumarBlaze"
                >
                  SaikumarBlaze
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">Linkedin : &nbsp;</span>{" "}
                <a
                  className="td-n social-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/saikumar452/"
                >
                  saikumar452
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex align-items-center mb-3">
              <i className="fa-solid fa-chevron-right field-icon me-2"></i>
              <div className="field-body ms-1">
                <span className="field-body-title">Languages : &nbsp;</span>{" "}
                <span>English,&nbsp; Hindi,&nbsp; Telugu,&nbsp; Kannada</span>
              </div>
            </div>
          </div>

          <p className="personal-quote mt-40 p-3">
            <span>
              <i className="fa-solid fa-quote-left me-2"></i>
            </span>
            Technology is more than just a career for me - it's a passion. I
            love exploring how new tools and frameworks can solve real-world
            problems.
            <span>
              <i className="fa-solid fa-quote-right ms-2"></i>
            </span>
          </p>
        </div>
        <div className="skills-section m-7">
          <h3 className="section-heading d-flex align-items-center mb-3">
            SKILLS <span className="heading-line ms-2"></span>
          </h3>
          <div className="skills-body">
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>C++</span>
                <span>80%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-80 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>PYTHON</span>
                <span>80%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-80 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-95 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-90 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>Javascript</span>
                <span>80%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-80 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>React js</span>
                <span>80%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-80 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>Express Js</span>
                <span>85%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-85 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>Node Js</span>
                <span>85%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-85 bg-g"></div>
              </div>
            </div>
            <div className="skill-progress mb-3">
              <div className="skill-title">
                <span>MongoDB</span>
                <span>75%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "10px",
                  borderRadius: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="progress-bar w-75 bg-g"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="interests-section m-7">
          <h3 className="section-heading d-flex align-items-center mb-3">
            Interests <span className="heading-line ms-2"></span>
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="software">
                        <i className="fa-solid fa-laptop-code my-icon purple"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">
                        Software Engineer
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="web">
                        <i className="fa-solid fa-code my-icon yellow"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">
                        Web Development
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="devops">
                        <i className="fa-solid fa-server my-icon cyan"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">
                        DevOps
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="cloud">
                        <i className="fa-solid fa-cloud my-icon red"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">
                        Cloud Computing
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="open">
                        <i className="fa-brands fa-github my-icon blue"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">
                        Open Source
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 text-light interest-item">
                <div className="card-body py-4 ps-4">
                  <div className="item-container d-flex">
                    <div className="item-left me-3 d-flex justify-content-center align-items-center">
                      <div className="chess">
                        <i className="fa-solid fa-chess my-icon dark-blue"></i>
                      </div>
                    </div>
                    <div className="item-right d-flex align-items-center">
                      <h5 className="card-title m-0 interest-content">Chess</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="availability-status">
          <h3 className="section-heading d-flex align-items-center mb-4">
            Availability <span className="heading-line ms-2"></span>
          </h3>
          <div className="status-body">
            <span className="badge bg-primary me-2 mb-2">Freelance Work</span>
            <span className="badge bg-success me-2 mb-2">Collaborations</span>
            <span className="badge bg-info me-2 mb-2">Full-time Roles</span>
            <p className="mt-3 desc">
              <span>
                <i className="fa-solid fa-quote-left me-2"></i>
              </span>
              Feel free to reach out if you'd like to work together or have an
              exciting project in mind.
              <span>
                <i className="fa-solid fa-quote-right ms-2"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
