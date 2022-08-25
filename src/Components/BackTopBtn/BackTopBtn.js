/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
// import link
import { animateScroll as scroll } from "react-scroll";
// import icon
import "./BackTopBtn.scss";
const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      //   <button onClick={() => scrollToTop()} className="back-top">
      //     <IoIosArrowUp></IoIosArrowUp>
      //     akdjfa;lskdj
      //     <div className="childback-top ">

      //       <IoIosArrowUp className=""></IoIosArrowUp>
      //     </div>
      //   </button>
      <button onClick={() => scrollToTop()} className="back-top bounce">
        {/* <FaArrowAltCircleUp /> */}
        <div className="childback-top ">
          <IoIosArrowUp className="arrow"></IoIosArrowUp>
        </div>
      </button>
    )
  );
};

export default BackTopBtn;
