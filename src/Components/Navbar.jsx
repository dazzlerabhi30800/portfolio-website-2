import React, { useEffect, useRef, useState } from "react";
import { Resize } from "./Resize";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const windowWidth = Resize();
  const [showMenu, setShowMenu] = useState(false);
  document.documentElement.addEventListener("click", checkMenu);

  function checkMenu(e) {
    if (!e.isTrusted) return;
    const path = e.composedPath();
    if (
      navbarRef?.current &&
      !navbarRef?.current.contains(e.target) &&
      !path.some((elem) => elem.id === "navBtn")
    ) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", checkMenu);
    return () => window.removeEventListener("click", checkMenu);
  }, []);

  const navbarRef = useRef(null);
  return (
    <nav>
      <h1>
        Abhishek<span className="dot"></span>
        <span>Choudhary</span>
      </h1>
      <ul
        ref={navbarRef}
        className={`nav--links ${showMenu ? "active" : ""}`}
        id="navLinks"
      >
        <li className="link">
          <a href="#home">Home</a>
        </li>
        <li className="link">
          <a href="#about">About</a>
        </li>
        <li className="link">
          <a href="#projects">Projects</a>
        </li>
        <li className="link">
          <a href="#resume">Contact</a>
        </li>
      </ul>
      {windowWidth < 700 && (
        <button
          className="nav--btn"
          id="navBtn"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <AiOutlineClose /> : <CgMenuLeft />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
