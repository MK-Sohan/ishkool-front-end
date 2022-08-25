import React, { useEffect, useState } from "react";
import Heading from "../../Heading/Heading";
import "./LeaderBoard.scss";
import { topStudents } from "../../../dummydata";
import { MdLocationOn } from "react-icons/md";
import { GiChessKing } from "react-icons/gi";
import svg from "../../image/certificate-1356.png";
const LeaderBoard = () => {
  return (
    <div className="leaderboard ">
      <div className="hr2">
        <hr />
      </div>
      <div className="">
        <Heading subtitle="Leaderboard" title=" our top students" />
        <div className="parant-container">
          <div className="leaderboard-maincontainer">
            <h2 className="tittle">Top Gainers</h2>
            {topStudents.slice(0, 3).map((student) => (
              <div className="leaderboard-main">
                <div className="topstudent-image">
                  <div className={`color-box ${student.rank == 1 && "first"}`}>
                    <span className="rank">{student.rank}</span>
                    <img src={student.image} alt="" />
                  </div>
                  <h3>{student.name}</h3>
                  <p className="email">{student.email}</p>
                </div>
                <div className="hr" />
                <div className="topstudent-location">
                  <div className="location">
                    <MdLocationOn /> {student.location}
                  </div>
                  <div>
                    <button className="location-button"> Congratulate</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="parentstudent-table  ">
            <h2 className="tittle-2">Top 5 Students</h2>
            <section className="student-table student-table-2">
              <div className="head">Rank</div>

              <div className="head">Subject</div>

              <div className="head head-2">Badges</div>
            </section>
            {topStudents.map((student) => (
              <div className="main-table">
                <section className="student-table">
                  <div className="image-head  head">
                    {student.rank}
                    <img src={student.image} alt="" />
                    <p className="student-name">
                      {" "}
                      {student.name} <GiChessKing className="badge" />
                    </p>
                  </div>

                  <div className="head">{student.subject}</div>

                  <div className="table-badge">
                    {" "}
                    <img src={svg} alt="" />{" "}
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" hr2">
        <hr />
      </div>
    </div>
  );
};

export default LeaderBoard;
