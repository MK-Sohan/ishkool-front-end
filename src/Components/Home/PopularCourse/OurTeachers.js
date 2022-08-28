import React from "react";
import Heading from "../../Heading/Heading";
import { coursesCard } from "../../../dummydata";
import "./Popularcourses.scss";
import { FaStar } from "react-icons/fa";
import OnlineCourses from "./OnlineCourses/OnlineCourses";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "./Popularcourses.scss";
const OurTeachers = () => {
  return (
    <>
      <section className="homeAbout container">
        <OnlineCourses />

        <div className="our-teachers1">
          <div className="hr2">
            <hr />
          </div>
          <div
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {" "}
            <Heading subtitle="Our Teachers" title=" our top rated teachers" />
          </div>

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2 ">
              {coursesCard.slice(0, 4).map((val) => (
                <div
                  data-aos="flip-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="items"
                >
                  <div className="content flex">
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="org-name">
                        <p>{val.org}</p>
                      </div>
                      <div className="rate">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <div className="details-sb">
                            <div className="box">
                              <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                                <h3 className="per-hours">
                                  {details.totalTime}
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Tippy content="  ENROLL NOW !">
                    <button className="outline-btn custome-button our-teachers">
                      ENROLL NOW !
                    </button>
                  </Tippy>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeachers;
