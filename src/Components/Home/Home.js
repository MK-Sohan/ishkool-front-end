import React from "react";
import Fortest from "../Fortesst/Fortest";

import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import JoinUs from "./JoinUs/JoinUs";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

import Navbar from "./Navbar/Navbar";
import OurTeachers from "./PopularCourse/OurTeachers";

const Home = () => {
  return (
    <div>
      {/* <section className="hero-parent">
        <Navbar></Navbar>
        <Banner></Banner>
      </section>

      <JoinUs />
      <OurTeachers></OurTeachers>
      <LeaderBoard></LeaderBoard>

      
      <FAQ /> */}

      <Fortest />
    </div>
  );
};

export default Home;
