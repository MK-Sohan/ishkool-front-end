import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import "./courseDetails.scss";
const CourseDetails = () => {
  const { id } = useParams();
  return (
    <div className="course-details">
      <Navbar></Navbar>
      <div>
        <h1 className="details">this is course details of [{id}]</h1>
      </div>
    </div>
  );
};

export default CourseDetails;
