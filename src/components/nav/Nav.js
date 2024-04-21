import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { SiBento } from "react-icons/si";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <div className="nvbarDiv">
      <nav className="navBox">
        <a
          onClick={() => setActive("/")}
          className={active === "/" ? "active" : ""}
          href="/"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : ""}
          href="#experience"
        >
          <BiBook />
        </a>
        <a
          onClick={() => setActive("#portfolio")}
          className={active === "#portfolio" ? "active" : ""}
          href="#portfolio"
        >
          <SiBento />
        </a>
        <a
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
