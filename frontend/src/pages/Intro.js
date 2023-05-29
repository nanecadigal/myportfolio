import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "../assets/styles/intro.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import profileImg from "../assets/images/james-harrison-vpOeXr5wmR4-unsplash.jpg";

// Testimonial images
import test1 from "../assets/images/testimonials/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";
import test2 from "../assets/images/testimonials/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import test3 from "../assets/images/testimonials/iheb-ab-OBufvGMaBaQ-unsplash.jpg";
import test4 from "../assets/images/testimonials/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg";
import test5 from "../assets/images/testimonials/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

function Intro() {
  return (
    <>
      <div className="introduction">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <span className="fa-stack">
                  <span className="blob"></span>
                  <i className="fa-solid fa-school fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit.
                    Vivamus tempor, qua nec lobortis sodales, diam nibh reni
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <span className="fa-stack">
                  <span className="blob"></span>
                  <i className="fa-solid fa-binoculars fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h5 className="card-title">Career</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit.
                    Vivamus tempor, qua nec lobortis sodales, diam nibh reni
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <span className="fa-stack">
                  <span className="blob"></span>
                  <i className="fa-solid fa-code fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h5 className="card-title">Hobbies</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit.
                    Vivamus tempor, qua nec lobortis sodales, diam nibh reni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about my-3">
        <div className="container">
          <div className="row">
            <div className="intro-image">
              <div className="col col-sm-12 col-lg-7">
                <div className="image-container">
                  <img class="img-fluid" src={profileImg} alt="alternative" />
                </div>
              </div>
              <div className="col col-sm-12 col-lg-5">
                <div className="text-container">
                  <div className="section-title ">INTRO</div>
                  <h2>About Me</h2>
                  <p className="aboutme-details">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Vivamus tempor quami nec lobortis sodales, diam nibh
                    elementum nunc rabim est donovan
                  </p>
                  <p className="quote">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Vivamus tempor quami nec lobortis sodales, diam nibh
                    elementum nunc rabim est donovan
                  </p>
                  <p className="quote-author">Hernane Cadigal - Scientist</p>
                  <button className="btn-solid-reg">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services py-5">
        <div className="container p-0">
          <div className="row">
            <div className="col col-lg-12">
              <div className="section-title">SERVICES</div>
              <h2 className="h2-heading">
                Choose The Service Package That Suits Your Needs
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src={profileImg}
                    alt="Web Design"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Web Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src={profileImg}
                    alt="Web Design"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Web Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src={profileImg}
                    alt="Web Design"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Graphic Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src="images/service-1.jpg"
                    alt="alternative"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Off The Ground</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Lorem ipsum dolor sit amet verlo
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Nec lobortis sodales rivalo mici
                      </div>
                    </li>
                  </ul>
                  <div className="price">
                    Starting at <span>$199</span>
                  </div>
                </div>
                <div className="button-wrapper">
                  <a className="btn-solid-reg" href="#registration">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src="images/service-1.jpg"
                    alt="alternative"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Off The Ground</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Lorem ipsum dolor sit amet verlo
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Nec lobortis sodales rivalo mici
                      </div>
                    </li>
                  </ul>
                  <div className="price">
                    Starting at <span>$199</span>
                  </div>
                </div>
                <div className="button-wrapper">
                  <a className="btn-solid-reg" href="#registration">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src="images/service-1.jpg"
                    alt="alternative"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Off The Ground</h4>
                  <p>
                    Lorem ipsum dolor sit amet verlo consec adipiscing elit.
                    Vivamus tem qua nec lobortis sodales mici
                  </p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Lorem ipsum dolor sit amet verlo
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-square"></i>
                      <div className="flex-grow-1">
                        Nec lobortis sodales rivalo mici
                      </div>
                    </li>
                  </ul>
                  <div className="price">
                    Starting at <span>$199</span>
                  </div>
                </div>
                <div className="button-wrapper">
                  <a className="btn-solid-reg" href="#registration">
                    Sign up
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="testimonials py-5">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="section-title">TESTIMONIALS</div>
              <h2 className="h2-heading">Read some of the client reviews</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              modules={{ Autoplay, Pagination }}
              autoplay={{
                delay: 1000,
              }}
              pagination={{clickable: true}}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                756: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <div className="card">
                  <img className="card-image" src={test1} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">
                      Mauris facilisis urna urna, non volutpat tortor rhoncus
                      nec. Vivamus consectetur dui quis libero tempus ut
                      eleifend
                    </p>
                    <p className="testimonial-author">John Doe - CEO</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img className="card-image" src={test2} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">
                      Mauris facilisis urna urna, non volutpat tortor rhoncus
                      nec. Vivamus consectetur dui quis libero tempus ut
                      eleifend
                    </p>
                    <p className="testimonial-author">John Doe - CEO</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img className="card-image" src={test3} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">
                      Mauris facilisis urna urna, non volutpat tortor rhoncus
                      nec. Vivamus consectetur dui quis libero tempus ut
                      eleifend
                    </p>
                    <p className="testimonial-author">John Doe - CEO</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img className="card-image" src={test4} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">
                      Mauris facilisis urna urna, non volutpat tortor rhoncus
                      nec. Vivamus consectetur dui quis libero tempus ut
                      eleifend
                    </p>
                    <p className="testimonial-author">John Doe - CEO</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <img className="card-image" src={test5} alt="alternative" />
                  <div className="card-body">
                    <p className="testimonial-text">
                      Mauris facilisis urna urna, non volutpat tortor rhoncus
                      nec. Vivamus consectetur dui quis libero tempus ut
                      eleifend
                    </p>
                    <p className="testimonial-author">John Doe - CEO</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="col col-sm-12 col-lg-4">swiper 1</div>
            <div className="col col-sm-12 col-lg-4">swiper 2</div>
            <div className="col col-sm-12 col-lg-4">swiper 3</div>
            <div className="col col-sm-12 col-lg-4">swiper 4</div>
            <div className="col col-sm-12 col-lg-4">swiper 5</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
