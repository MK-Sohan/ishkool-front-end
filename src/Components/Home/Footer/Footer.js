import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMap,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1 className="footer-logo">ISHKOOL</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and <br /> supplies
              it with the necessary regelialia.
            </p>
            <FaFacebook className="icon"></FaFacebook>{" "}
            <FaInstagram className="icon"></FaInstagram>
            <FaTwitter className="icon"></FaTwitter>
            <FaYoutube className="icon"></FaYoutube>
          </div>
          <div className="box link">
            <h3>Explore</h3>

            <li>About Us</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact us</li>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>

            <li>Contact Us</li>

            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Feedbacks</li>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>

            <li>
              <FaPhone></FaPhone>
              +880xxxxxxx
            </li>
            <li>
              <FaPaperPlane></FaPaperPlane>
              abc@gmail.com
            </li>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made with by
          Taz Mahbubul Kobir
        </p>
      </div>
    </>
  );
};

export default Footer;
