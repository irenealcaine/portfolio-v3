"use client"

import Navbar from "@/Components/Navbar/Navbar";
import styles from "./page.module.css";
import Front from "@/Pages/Home/Home";
import Portfolio from "@/Pages/Portfolio/Portfolio";
import Contact from "@/Pages/Contact/Contact";
import { useEffect, useState } from "react";

export default function Home() {

  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const portfolioElement = document.getElementById("portfolio");
      const contactElement = document.getElementById("contact");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition < portfolioElement.offsetTop) {
        setCurrentSection("home");
      } else if (
        scrollPosition >= portfolioElement.offsetTop &&
        scrollPosition < contactElement.offsetTop
      ) {
        setCurrentSection("portfolio");
      } else {
        setCurrentSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run once on mount

  return (
    <main className={styles.main}>
      <Front id="home" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Navbar currentSection={currentSection} />
    </main>
  );
}
