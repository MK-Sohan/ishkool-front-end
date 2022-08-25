import React from "react";
import "./Joinus.scss";
const SubJoinwithus = ({ item }) => {
  return (
    <div class="artboard">
      <div class=" card-2">
        <div class="card-2__side card-2__side--back">
          <div
            class="card-2__cover"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* <h4 class="card-2__heading">
              <span class="card-2__heading-span">Skill Set</span>
            </h4> */}
          </div>
          <div class="card-2__details">
            <p>
              Advanced JS and CSS Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Voluptates ullam ipsum placeat enim consequatur
              cupiditate ipsa ea itaque, vero non? Advanced JS and CSS Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
              ullam ipsum placeat enim consequatur cupiditate ipsa ea itaque,
              vero non?
            </p>
            {/* <ul>
              <li></li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul> */}
          </div>
        </div>

        <div
          class="card-2__side card-2__side--front"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div class="card-2__theme">
            <div class="card-2__theme-box">
              <p class="card-2__subject">{item.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubJoinwithus;
