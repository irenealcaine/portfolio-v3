"use client";
import { useContext } from "react";
import "./Navbar.scss";
import { DarkModeContext } from "../../Context/darkModeContext";
import {
  IoHomeOutline,
  IoMailOutline,
  IoSunnyOutline,
  IoCodeSlashOutline,
  IoMoonOutline,
  IoLanguageOutline,
} from "react-icons/io5";

const Navbar = ({ currentSection }) => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <ul>
        <li className={`${darkMode ? "dark" : ""} ${currentSection === "home" ? "active" : ""}`}>
          <a href="#home">
            <IoHomeOutline />
          </a>
        </li>
        <li className={`${darkMode ? "dark" : ""} ${currentSection === "portfolio" ? "active" : ""}`}>
          <a href="#portfolio">
            <IoCodeSlashOutline />
          </a>
        </li>
        <li className={`${darkMode ? "dark" : ""} ${currentSection === "contact" ? "active" : ""}`}>
          <a href="#contact">
            <IoMailOutline />
          </a>
        </li>
      </ul>
      <ul>
        <li
          className={darkMode ? "dark" : ""}
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </li>
        <li className={darkMode ? "dark" : ""}>
          <IoLanguageOutline />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
