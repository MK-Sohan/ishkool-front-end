import React from "react";
import Heading from "../../Heading/Heading";
import "./Faq.scss";

const FAQ = () => {
  return (
    <div className="main-container">
      <div className="input-field">
        <Heading subtitle="Contact" title="Contact Us" />
        <input
          required
          placeholder="Enter your Name"
          className="input-1"
          type="text"
        />
        <input
          required
          placeholder="Enter your Email"
          className="input-1"
          type="email"
        />{" "}
        <br />
        <textarea
          required
          placeholder="Description"
          className="text-area"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>{" "}
        <br />
        <button className="table-button" type="submit">
          Submit
        </button>
      </div>

      <div className="faq-maincontainer">
        <Heading subtitle="FAQ" title="Frequently Ask Question" />
        <details open>
          <summary>FAQ 1</summary>
          <div class="faq__content">
            <p>
              2020 was (and 2021 is) a year of digital revolution in learning
              and online learning. Revolution in this case means that so many
              schools, educational institutions and companies had to abandon
              their traditional face-to-face classroom education and replace it
              with online classes and digital educational materials. Some had
              more experience while others had to start basically from scratch.
            </p>
          </div>
        </details>
        <details>
          <summary>FAQ 2</summary>
          <div class="faq__content">
            <p>
              2020 was (and 2021 is) a year of digital revolution in learning
              and online learning. Revolution in this case means that so many
              schools, educational institutions and companies had to abandon
              their traditional face-to-face classroom education and replace it
              with online classes and digital educational materials. Some had
              more experience while others had to start basically from scratch.
            </p>
          </div>
        </details>
        <details>
          <summary>FAQ 3</summary>
          <div class="faq__content">
            <p>
              2020 was (and 2021 is) a year of digital revolution in learning
              and online learning. Revolution in this case means that so many
              schools, educational institutions and companies had to abandon
              their traditional face-to-face classroom education and replace it
              with online classes and digital educational materials. Some had
              more experience while others had to start basically from scratch.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
