import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";

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
          <a
            onClick={() => window.open("https://github.com/dazzlerabhi30800")}
            href="https://github.com/dazzlerabhi30800"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abhishek-choudhary-00679621b/"
              )
            }
            href="https://www.linkedin.com/in/abhishek-choudhary-00679621b/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            onClick={() => window.open("https://twitter.com/Abhishek30800")}
            href="https://twitter.com/Abhishek30800"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a
            onClick={() => window.open("https://codepen.io/dazzlerabhi30800")}
            href="https://codepen.io/dazzlerabhi30800"
            target="_blank"
          >
            <FiCodepen />
          </a>
        </div>

        <span className="copyright">© 2023 Copyright Abhishek Choudhary</span>
      </div>
    </div>
  );
};
