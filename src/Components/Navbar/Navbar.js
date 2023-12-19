import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import resumeImg from "../../assets/resume.png";
import { Link } from "react-scroll";
import Menu from "../../assets/menu.png";
import Resume from "../../assets/Resume.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem">
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem">
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem">
          Clients
        </Link>
      </div>
      <a href={Resume} target="blank" className="desktopMenuBtn">
        <button
          className="desktopMenuBtnin">
          <img src={resumeImg} alt="" className="desktopMenuImg" />
          Get Resume
        </button>
      </a>

      <img
        src={Menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}>
          Clients
        </Link>
        <a href={Resume} onClick={() => setShowMenu(false)} className="listItem" target="_blank" rel="noreferrer">Get Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
