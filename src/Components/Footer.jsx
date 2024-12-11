import React from "react";

export const Footer = () => {
  return (
    <div className="footer--wrapper">
      <div className="footer--container">
        <h1>
          Abhishek<span className="dot"></span>
          <span>Choudhary</span>
        </h1>

        <ul className="links">
          <li className="link">
            <a
              href="#home"
              onClick={(e) => (window.location.href = e.target.href)}
            >
              Home
            </a>
          </li>
          <li className="link">
            <a
              href="#about"
              onClick={(e) => (window.location.href = e.target.href)}
            >
              About
            </a>
          </li>
          <li className="link">
            <a href="#projects">Projects</a>
          </li>
          <li className="link">
            <a href="#resume">Contact</a>
          </li>
        </ul>
        <span className="copyright">© 2024 Copyright Abhishek Choudhary</span>
      </div>
    </div>
  );
};
