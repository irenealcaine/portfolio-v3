"use client"
import styles from "../../app/page.module.css";
import "./Subtitle.scss";
import { DarkModeContext } from "@/Context/darkModeContext";
import { useContext } from "react";

const Subtitle = ({ subtitle }) => {
  const { darkMode } = useContext(DarkModeContext);
  return <h2 className={`subtitle ${darkMode ? "dark" : ""}`}>{subtitle}</h2>;
};

export default Subtitle;
