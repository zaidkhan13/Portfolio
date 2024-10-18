import React from "react";
import "../assets/styles/resume.css";

const Resume = () => {
  return (
    <div className="my-outer-container px-4 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title d-flex">
          <div className="title-content">
            <h2 className="section-heading d-flex align-items-center">
              Resume <span className="heading-line ms-2"></span>
            </h2>
            <p className="sub-desc">CHECK MY RESUME</p>
          </div>
          <div className="resume ml-5">
            <a
              className="resume-link"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1oaZbVxw_Cwp37fGEcfv76tiNOxj7YvLu/view?usp=sharing"
            >
              Resume Link
            </a>
          </div>
        </div>
        <div className="section-body d-flex my-4">
          <div className="resume-left d-flex flex-column">
            <div className="resume-section-1">
              <div className="section-1-content">
                <h3 className="mt-2 mb-4">Education</h3>
                <div className="box d-flex">
                  <div className="left-box-1 d-flex flex-column align-items-center">
                    <span className="circle"></span>
                    <span className="v-line"></span>
                  </div>
                  <div className="right-box-1">
                    <h5 className="title-green mb-2">Bachelor of Technology</h5>
                    <span className="badge bg-secondary mb-2">2020 - 2024</span>
                    <div className="study-place mb-2">
                      Indian Institute of Information Technology, Jabalpur
                    </div>
                    <div className="course mb-2">
                      Computer Science and Engineering
                    </div>
                    <div className="score">
                      <span className="bold">cgpa :&nbsp; </span> 6.5 / 10
                    </div>
                  </div>
                </div>
                <div className="box d-flex">
                  <div className="left-box-1 d-flex flex-column align-items-center">
                    <span className="circle"></span>
                    <span className="v-line"></span>
                  </div>
                  <div className="right-box-1">
                    <h5 className="title-green mb-2">Higher Secondary</h5>
                    <span className="badge bg-secondary mb-2">2019 - 2020</span>
                    <div className="study-place mb-2">
                      Sri Chaitanaya Jr College, Telangana
                    </div>
                    <div className="course mb-2">Maths-Physics-Chemistry</div>
                    <div className="score">
                      <span className="bold">percentage :&nbsp; </span> 92 / 100
                    </div>
                  </div>
                </div>
                <div className="box d-flex">
                  <div className="left-box-1 d-flex flex-column align-items-center">
                    <span className="circle"></span>
                    <span className="v-line"></span>
                  </div>
                  <div className="right-box-1 pb-0">
                    <h5 className="title-green mb-2">Secondary Education</h5>
                    <span className="badge bg-secondary mb-2">2017 - 2018</span>
                    <div className="study-place mb-2">
                      Fr. Roch Memorial High School, Telangana
                    </div>
                    <div className="course mb-2">Maths-Physics-Chemistry</div>
                    <div className="score">
                      <span className="bold">cgpa :&nbsp; </span> 9.7 / 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-right d-flex flex-column">
            <div className="resume-section-1">
              <div className="section-1-content">
                <h3 className="mt-2 mb-4">Achievements</h3>
                <div className="box d-flex">
                  <div className="left-box-1 d-flex flex-column align-items-center">
                    <span className="circle"></span>
                    <span className="v-line"></span>
                  </div>
                  <div className="right-box-1">
                    <h5 className="title-green mb-2">
                      Microsoft DevOps Training
                    </h5>
                    <span className="badge bg-secondary mb-3">
                      September 2024
                    </span>
                    <div className="mb-3">
                      <ul className="list-item-1">
                        <li className="mb-2">
                          Learned to configure CI/CD pipelines and manage source
                          control.
                        </li>
                        <li className="mb-2">
                          Improved team collaboration and deployment efficiency.
                        </li>
                        <li className="mb-2">
                          Implemented security compliance measures, increasing
                          productivity by 20%.
                        </li>
                      </ul>
                    </div>
                    <div className="source mb-2">
                      <a
                        className="certificate-link"
                        href="https://www.github.com/SaikumarBlaze"
                      >
                        Certificate Link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box d-flex">
                  <div className="left-box-1 d-flex flex-column align-items-center">
                    <span className="circle"></span>
                    <span className="v-line"></span>
                  </div>
                  <div className="right-box-1 pb-0">
                    <h5 className="title-green mb-2">
                      Swayam Plus AWS Cloud Training
                    </h5>
                    <span className="badge bg-secondary mb-3">
                      August 2024 - October 2024
                    </span>
                    <div className="mb-3">
                      <ul className="list-item-1">
                        <li className="mb-2">
                          Gained knowledge of AWS Cloud services and
                          architecture.
                        </li>
                        <li className="mb-2">
                          Worked with cloud security and pricing models.
                        </li>
                        <li className="mb-2">
                          Created cost-effective and scalable cloud
                          infrastructures.
                        </li>
                      </ul>
                    </div>
                    <div className="source">
                      <a
                        className="certificate-link"
                        href="https://www.github.com/SaikumarBlaze"
                      >
                        Certificate Link
                      </a>
                    </div>
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

export default Resume;
