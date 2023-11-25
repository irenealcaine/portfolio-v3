"use client"
import { useContext } from "react";
import "./Navbar.scss";
import { DarkModeContext } from "../../Context/darkModeContext";
import { IoHomeOutline, IoMailOutline, IoSunnyOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">
            <IoHomeOutline />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FaLaptopCode />
          </a>
        </li>
        <li>
          <a href="#contact">
            <IoMailOutline />
          </a>
        </li>
      </ul>
      <ul>
        <li onClick={() => dispatch({ type: "TOGGLE" })}>
          <IoSunnyOutline />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
