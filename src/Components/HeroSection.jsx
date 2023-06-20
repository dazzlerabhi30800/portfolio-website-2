import React from "react";

export const HeroSection = () => {
  return (
    <section className="section--comp hero--section" id="home">
      <h2>
        Frontend <span className="shadow--font">Frontend</span>
      </h2>
      <div className="profile--img">
        <img src="./profile-nobg.png" alt="abhishek" />
      </div>
      <h2>
        Developer <span className="shadow--font">Developer</span>
      </h2>
    </section>
  );
};
