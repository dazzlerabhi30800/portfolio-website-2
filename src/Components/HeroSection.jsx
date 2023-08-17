import React, { useEffect } from "react";
import { gsap } from "gsap";

export const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile--img",
      { y: "-500%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "Power0.easeOut", duration: 1.5 }
    );
    gsap.fromTo(
      ".left",
      { x: "-400%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "Power3.easeOut", duration: 2, delay: 1.5 }
    );
    gsap.fromTo(
      ".right",
      { x: "400%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "Power3.easeOut", duration: 2, delay: 1.5 }
    );

    // return () => ctx.revert();
  }, []);
  return (
    <section className="section--comp hero--section" id="home">
      <h2 className="left">
        Frontend <span className="shadow--font">Frontend</span>
      </h2>
      <div className="profile--img">
        <img src="./profile-nobg.png" alt="abhishek" />
      </div>
      <h2 className="right">
        Developer <span className="shadow--font">Developer</span>
      </h2>
    </section>
  );
};
