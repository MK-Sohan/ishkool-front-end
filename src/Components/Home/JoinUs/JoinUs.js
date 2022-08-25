import React from "react";
import "./Joinus.scss";
import { joinwithus } from "../../../dummydata";
import Heading from "../../Heading/Heading";
const JoinUs = () => {
  return (
    <div className="joinwith-us">
      {" "}
      <Heading subtitle="Join Us" title="Join With Us" />
      <div className="container grid ">
        {joinwithus.map((item) => (
          <div
            class="card"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div class="btn-div">
              <button class="my-btn">Join</button>
            </div>

            <div class="card-child">
              <h2 class="title">{item.title}</h2>

              <p class="disclaimer">{item.desc}</p>
            </div>
          </div>
          // <ul>
          //   <li
          //     class="booking-card"
          //     style={{
          //       backgroundImage: `url(${item.image})`,
          //     }}
          //   >
          //     <div class="book-container">
          //       <div class="content">
          //         <button class="btn">Join Us</button>
          //       </div>
          //     </div>
          //     <div class="informations-container">
          //       <h2 class="title">{item.title}</h2>
          //       {/* <p class="sub-title">Et moi un je suis sous-titre</p>
          //          <p class="price">De 0 à 15 €</p> */}
          //       <div class="more-information">
          //         <p class="disclaimer">{item.desc}</p>
          //       </div>
          //     </div>
          //   </li>
          // </ul>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
