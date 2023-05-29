import React, { useState } from "react";
import "../assets/styles/navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* <!-- Image Logo --> */}
        <a class="navbar-brand logo-image" href="index.html">
          <img src="images/logo.svg" alt="alternative" />
        </a>

        {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
        {/* <!-- <a class="navbar-brand logo-text" href="index.html">Name</a> --> */}

        <button
          class="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul class="navbar-nav ms-auto navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link" href="#header">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#intro">
                Intro
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="menu-container">
          <div
            className={`menu-button ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {isMenuOpen && (
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link" href="#header">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#intro">
                  Intro
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div> */}
      </div>
    </nav>
  );
}

export default Navigation;
