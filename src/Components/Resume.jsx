import ResumeImg from "../ats-resume.png";
import ResumePdf from "../ats-resume.pdf";

export const Resume = () => {
  const buttonStyle = {
    border: "none",
    outline: "none",
    color: "#fff",
  };
  return (
    <section className="resume--section" id="resume">
      <h2>
        Resume <span className="shadow--font">Resume</span>
      </h2>
      <button
        type="submit"
        style={buttonStyle}
        onClick={() => window.open(ResumePdf)}
        className="download--btn"
      >
        Download Resume
      </button>
      <img src={ResumeImg} className="resume--img" alt="resume" />
    </section>
  );
};
