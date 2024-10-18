import React from "react";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <div className="my-outer-container d-flex align-items-center px-3 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title mb-5">
          <h2 className="section-heading d-flex align-items-center">
            CONTACT <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">CONTACT ME</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              className="card my-3 text-light"
              style={{ background: "rgba(255, 255, 255, 0.07)" }}
            >
              <div className="card-body item-body">
                <div className="item-container d-flex">
                  <div className="item-left me-2 d-flex justify-content-center align-items-center">
                    <div className="location i-icon mx-2">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                  <div className="item-right">
                    <h5 className="card-title item-title mb-2">My Address</h5>
                    <p className="card-text item-content">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card my-3 text-light"
              style={{ background: "rgba(255, 255, 255, 0.07)" }}
            >
              <div className="card-body item-body">
                <div className="item-container d-flex">
                  <div className="item-left me-2 d-flex justify-content-center align-items-center">
                    <div className="social i-icon mx-2">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                  <div className="item-right">
                    <h5 className="card-title item-title mb-2">
                      Social Profiles
                    </h5>
                    <div className="d-flex">
                      <a
                        className="text-light td-n"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/saikumar8742/"
                      >
                        <i className="fa-brands fa-instagram i-con"></i>
                      </a>
                      <a
                        className="text-light td-n"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/saikumar452/"
                      >
                        <i className="fa-brands fa-linkedin i-con"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card my-3 text-light"
              style={{ background: "rgba(255, 255, 255, 0.07)" }}
            >
              <div className="card-body item-body">
                <div className="item-container d-flex">
                  <div className="item-left me-2 d-flex justify-content-center align-items-center">
                    <div className="instagram i-icon mx-2">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  <div className="item-right">
                    <h5 className="card-title item-title mb-2">Email Me</h5>
                    <p className="card-text item-content">halbarsaikumar452@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card my-3 text-light"
              style={{ background: "rgba(255, 255, 255, 0.07)" }}
            >
              <div className="card-body item-body">
                <div className="item-container d-flex">
                  <div className="item-left me-2 d-flex justify-content-center align-items-center">
                    <div className="instagram i-icon mx-2">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div className="item-right">
                    <h5 className="card-title item-title mb-2">Call Me</h5>
                    <p className="card-text item-content">+91 9182086206</p>
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

export default Contact;
