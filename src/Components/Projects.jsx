import React from "react";

export const Projects = () => {
  return (
    <section className="project--section" id="projects">
      <h2>
        Projects <span className="shadow--font">Projects</span>
      </h2>
      <div className="projects--wrapper">
        <div className="project--card">
          <div className="card">
            <img src="./Project-img/rock-paper-scissor.png" alt="" />
            <h3>Rock Paper Scissors</h3>
            <button>Github</button>
            <button>Live Url</button>
          </div>
        </div>
      </div>
    </section>
  );
};
