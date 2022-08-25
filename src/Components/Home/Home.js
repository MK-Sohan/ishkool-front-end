import React from "react";

import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import JoinUs from "./JoinUs/JoinUs";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

import Navbar from "./Navbar/Navbar";
import OurTeachers from "./PopularCourse/OurTeachers";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JoinUs />
      <OurTeachers></OurTeachers>
      <LeaderBoard></LeaderBoard>

      <FAQ />
    </div>
  );
};

export default Home;
