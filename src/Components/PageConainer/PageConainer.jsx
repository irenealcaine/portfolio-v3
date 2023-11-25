"use client"
import "./PageContainer.scss";
import { DarkModeContext } from "@/Context/darkModeContext";
import { useContext } from "react";

const PageContainer = ({ children, id }) => {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`page-container ${darkMode ? "dark" : ""}`} id={id}>
      <div className="content">{children}</div>
    </section>
  );
};

export default PageContainer;
