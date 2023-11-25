"use client"
import { useContext } from "react";
import "./Navbar.scss";
import { DarkModeContext } from "../../Context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">🍕</a>
        </li>
        <li>
          <a href="#portfolio">🥙</a>
        </li>
        <li>
          <a href="#contact">🥟</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => dispatch({ type: "TOGGLE" })}>☀️</li>
      </ul>
    </nav>
  );
};

export default Navbar;
