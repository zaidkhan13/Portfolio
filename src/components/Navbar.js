import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";

const Navbar = (props) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top my-nav">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="25"
            height="25"
            className="d-inline-block align-text-top me-2"
          />
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/" ? "link-active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                <div className="d-flex flex-column nav-link-text">
                  Home
                  <div className="loading"></div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/about" ? "link-active" : ""
                }`}
                to="/about"
              >
                <div className="d-flex flex-column nav-link-text">
                  About
                  <div className="loading"></div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/resume" ? "link-active" : ""
                }`}
                to="/resume"
              >
                <div className="d-flex flex-column nav-link-text">
                  Resume
                  <div className="loading"></div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/projects" ? "link-active" : ""
                }`}
                to="/projects"
              >
                <div className="d-flex flex-column nav-link-text">
                  Projects
                  <div className="loading"></div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/contact" ? "link-active" : ""
                }`}
                to="/contact"
              >
                <div className="d-flex flex-column nav-link-text">
                  Contact
                  <div className="loading"></div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
