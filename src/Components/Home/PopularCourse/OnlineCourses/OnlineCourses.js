import React from "react";
import Heading from "../../../Heading/Heading";
import { online } from "../../../../dummydata";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
const OnlineCourses = () => {
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate("/course-details/" + id);
  };
  return (
    <>
      <section className=" " id="course">
        <div className="hr2">
          <hr />
        </div>
        <div className="online">
          <div
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Heading subtitle="COURSES" title=" Online Courses" />
          </div>
          <div data-aos="fade-left" className="content sbcontent grid3">
            {online.map((val) => (
              <div
                data-aos="flip-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="box"
              >
                <div className="img course-image">
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                <br />
                <Tippy content="Enroll Now">
                  <button
                    onClick={() => handleDetails(val.id)}
                    className="inroll-button"
                  >
                    Enroll Now
                  </button>
                </Tippy>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
