import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopHead from "../TopHead/TopHead";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.scss";
import logo from "../../image/TSCDemoLogo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <TopHead />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Leaderboard</a>
            </li>
            <li>
              <a href="/">Teacher</a>
            </li>
          </ul>
          <div className="start">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <button
            className="toggle custome-button"
            onClick={() => setClick(!click)}
          >
            {click ? <FaTimes></FaTimes> : <FaBars></FaBars>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
