import React, { useState } from "react";
import { Resize } from "./Resize";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const windowWidth = Resize();
  const [showMenu, setShowMenu] = useState(false);
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
        <button className="nav--btn" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose /> : <CgMenuLeft />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
