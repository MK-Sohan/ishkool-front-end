import React from "react";
import "./Banner.scss";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="hero">
        <div className="">
          <div className="row">
            <h4
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              WELCOME TO ISHKOOL
            </h4>
            <h1
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="logo"
            >
              Best Online Education Expertise
            </h1>

            <p
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="button "
            >
              <a href="course">
                {" "}
                <button className="primary-btn custome-button">
                  LOGIN <FaArrowRight />
                </button>
              </a>
              <button className="custome-button">
                SIGN UP <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
