import React, { useState, useEffect } from "react";
import "../assets/styles/portfolio.css";
import { TypeAnimation } from "react-type-animation";
import html from "../assets/images/tech-icons/icons8-html-100.png";
import css from "../assets/images/tech-icons/icons8-css-100.png";
import javascript from "../assets/images/tech-icons/icons8-javascript-100.png";
import react from "../assets/images/tech-icons/icons8-react-100.png";
import nodejs from "../assets/images/tech-icons/icons8-nodejs-100.png";
import mongodb from "../assets/images/tech-icons/icons8-mongodb-100.png";
import Navigation from "../components/Navigation";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    html,
    css,
    javascript,
    react,
    nodejs,
    mongodb,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation />
      <div className="portfolio">
        <div className="container d-flex flex-column justify-content-center h-100">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 col-lg-6">
              <div className="social-icons">
                <a href="" title="Facebook">
                  <i class="fa-brands fa-square-facebook fa-xl"></i>
                </a>
                <a href="" title="LinkedIn">
                  <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="" title="Github">
                  <i class="fa-brands fa-square-github fa-xl"></i>
                </a>
              </div>
              <div className="text-container">
                <div className="profile-name">
                  <span className="text-white fs-3 text">
                    Hello, I'm <span className="highlighted-text">Hernane</span>
                  </span>
                </div>
                <div className="profile-role">
                  <span className="primary-text">
                    <h1 className="typed">
                      <TypeAnimation
                        repeat={Infinity}
                        cursor={true}
                        sequence={[
                          "Full stack Dev",
                          3000,
                          "Web Designer",
                          3000,
                          "Graphic Designer",
                          3000,
                          "Digital Marketing",
                          3000,
                        ]}
                      />
                    </h1>
                    <span className="text-white">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi
                    </span>
                  </span>
                </div>
              </div>
              <div className="btn-wrapper my-3">
                <button className="btn-solid-lg rounded-pill">Hire Me</button>
                <a
                  href="hernanecadigal_resume.pdf"
                  download={"hernanecadigal_resume.pdf"}
                >
                  <button className="btn-outline-lg rounded-pill">
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              {/* <div className="image-container">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`rotating-image ${
                      index === currentIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div> */}
              {/* <ul className="tech-stack-icons text-white">
                  <li>
                    <img src={html} alt="HTML logo" id="stack"/>
                  </li>
                  <li>
                    <img src={css} alt="HTML logo" id="stack"/>
                  </li>
                  <li>
                    <img src={javascript} alt="HTML logo" id="stack"/>
                  </li>
                  <li>
                    <img src={react} alt="HTML logo" id="stack"/>
                  </li>
                  <li>
                    <img src={nodejs} alt="HTML logo" id="stack"/>
                  </li>
                  <li>
                    <img src={mongodb} alt="HTML logo" id="stack"/>
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1683817761">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
