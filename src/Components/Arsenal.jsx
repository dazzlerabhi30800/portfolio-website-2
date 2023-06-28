import React from "react";

export const Arsenal = () => {
  const images = [
    "./logo/bootstrap.png",
    "./logo/css.png",
    "./logo/figma.png",
    "./logo/github-2.png",
    "./logo/javascript.png",
    "./logo/nodeJS.png",
    "./logo/react.png",
    "./logo/sass.png",
    "./logo/tailwind.png",
    "./logo/vite.png",
  ];
  return (
    <section className="arsenal--section">
      <h2 data-aos="fade-right">
        Arsenal For Coding{" "}
        <span className="shadow--font">Arsenal For Coding</span>
      </h2>
      <div className="tools--wrapper">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              data-aos-delay={index * 50}
              data-aos="fade-left"
              src={img}
              alt="no-img"
            />
          );
        })}
      </div>
    </section>
  );
};
