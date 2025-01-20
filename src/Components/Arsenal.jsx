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
    "./logo/typescript.png",
    "./logo/vite.png",
    "./logo/next-js.png",
  ];
  return (
    <section className="arsenal--section">
      <h2>
        Arsenal For Coding{" "}
        <span className="shadow--font">Arsenal For Coding</span>
      </h2>
      <div className="tools--wrapper">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt="no-img"
            />
          );
        })}
      </div>
    </section>
  );
};
