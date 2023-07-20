import React from "react";
import ResumeImg from "../resume.png";

export const Resume = () => {
  const buttonStyle = {
    border: "none",
    outline: "none",
    color: "#fff",
  };
  return (
    <section className="resume--section" id="resume">
      <h2 data-aos="fade-left">
        Resume <span className="shadow--font">Resume</span>
      </h2>
      <button
        type="submit"
        style={buttonStyle}
        onClick={() => window.open(ResumeImg)}
        className="download--btn"
      >
        Download Resume
      </button>
    </section>
  );
};
