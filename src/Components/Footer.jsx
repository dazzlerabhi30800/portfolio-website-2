import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

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
        <div className="social--icons">
          <a href="https://github.com/dazzlerabhi30800" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-choudhary-00679621b/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/Abhishek30800" target="_blank">
            <BsTwitter />
          </a>
        </div>

        <span className="copyright">© 2022 Copyright Abhishek Choudhary</span>
      </div>
    </div>
  );
};
