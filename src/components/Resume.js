import React from "react";
import "../assets/styles/resume.css";

const Resume = () => {
  const resumeDetails = {
    resumeUrl:
      "https://drive.google.com/file/d/1Iq6MEPLfMz_Ry3vo51u8dMiLpCYveGF7/view?usp=sharing",
    leftSectionsList: [
      {
        title: "Education",
        subSectionsList: [
          {
            program: "Bachelor of Engineering",
            period: "2021 - 2024",
            institute: "Deccan College of Engineering and Technology",
            course: "Information Technology",
            key: "CGPA",
            score: "7.57 / 10",
          },
          {
            program: "Diploma",
            period: "2020 - 2021",
            institute: "Mahaveer Institute of Information Technology",
            course: "Mechanical Engineering",
            key: "CGPA",
            score: "6.5 / 10",
          },
          {
            program: "Secondary Education",
            period: "2017 - 2018",
            institute: "Fr. Roch Memorial High School, Telangana",
            course: "Maths-Physics-Chemistry",
            key: "CGPA",
            score: "7.7 / 10",
            last: true,
          },
        ],
      },
    ],
    rightSectionsList: [
      {
        title: "Achievements",
        subSectionsList: [
          {
            subTitle: "Microsoft DevOps Training",
            period: "September 2024",
            descList: [
              "Learned to configure CI/CD pipelines and manage source control.",
              "Improved team collaboration and deployment efficiency.",
              "Implemented security compliance measures, increasing productivity by 20%.",
            ],
            certificateUrl: "https://www.github.com/zaidkhan13",
            last: true,
          },
        ],
      },
    ],
  };

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
              href={resumeDetails.resumeUrl}
            >
              Resume Link
            </a>
          </div>
        </div>
        <div className="section-body d-flex my-4">
          <div className="resume-left d-flex flex-column">
            {resumeDetails.leftSectionsList.map((element, index) => {
              return (
                <div key={index} className="resume-section">
                  <h3 className="mt-2 mb-4">{element.title}</h3>
                  {element.subSectionsList.map((element, index) => {
                    return (
                      <div key={index} className="box d-flex">
                        <div className="left-box d-flex flex-column align-items-center">
                          <span className="circle"></span>
                          <span className="v-line"></span>
                        </div>
                        <div className={`right-box ${element.last && "pb-0"}`}>
                          <h5 className="title-green mb-2">
                            {element.program}
                          </h5>
                          <span className="badge bg-secondary mb-2">
                            {element.period}
                          </span>
                          <div className="study-place mb-2">
                            {element.institute}
                          </div>
                          <div className="course mb-2">{element.course}</div>
                          <div className="score">
                            <span className="bold">{element.key} :&nbsp; </span>{" "}
                            {element.score}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="resume-right d-flex flex-column">
            {resumeDetails.rightSectionsList.map((element, index) => {
              return (
                <div key={index} className="resume-section">
                  <h3 className="mt-2 mb-4">{element.title}</h3>
                  {element.subSectionsList.map((element, index) => {
                    return (
                      <div key={index} className="box d-flex">
                        <div className="left-box d-flex flex-column align-items-center">
                          <span className="circle"></span>
                          <span className="v-line"></span>
                        </div>
                        <div className={`right-box ${element.last && "pb-0"}`}>
                          <h5 className="title-green mb-2">
                            {element.subTitle}
                          </h5>
                          <span className="badge bg-secondary mb-3">
                            {element.period}
                          </span>
                          <div className="mb-0">
                            <ul className="list-item mb-0">
                              {element.descList.map((element, index) => {
                                return (
                                  <li key={index} className="mb-2">
                                    {element}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="source d-none">
                            <a
                              className="certificate-link"
                              href={element.certificateUrl}
                            >
                              Certificate Link
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
