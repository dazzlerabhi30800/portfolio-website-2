import React, { useState } from "react";
import { Resize } from "./Resize";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const windowWidth = Resize();
  const [showMenu, setShowMenu] = useState(false);
  document.documentElement.addEventListener("click", checkMenu);

  function checkMenu(e) {
    e.preventDefault();
    const path = e.composedPath();
    if (path.some((elem) => elem.id === "navBtn")) {
      document.documentElement.addEventListener("click", checkMenu);
      return;
    } else {
      setShowMenu(false);
      document.documentElement.removeEventListener("click", checkMenu);
    }
  }

  return (
    <nav>
      <h1>
        Abhishek<span className="dot"></span>
        <span>Choudhary</span>
      </h1>
      <ul className={`nav--links ${showMenu ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
