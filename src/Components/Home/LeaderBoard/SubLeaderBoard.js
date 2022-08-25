import React from "react";
import "./subleaderboard.scss";
const SubLeaderBoard = ({ topStudents }) => {
  return (
    <div class="table-container">
      <div class="">
        <table class="unfixed-table">
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((student) => (
              <tr>
                <td>{student.name}</td>
                <td>Column two</td>
                <td>Column two</td>
                <td>Column two</td>
                <td>Column two</td>
                <td>Column two</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubLeaderBoard;
