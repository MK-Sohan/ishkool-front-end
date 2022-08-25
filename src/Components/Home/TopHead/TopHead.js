import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TopHead = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="">
            <h1 className="logo">ISHKOOL</h1>
            <span className="sub-logo">ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <FaFacebook className="icon"></FaFacebook>{" "}
            <FaInstagram className="icon"></FaInstagram>
            <FaTwitter className="icon"></FaTwitter>
            <FaYoutube className="icon"></FaYoutube>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHead;
