"use client";
import "./Title.css";
import React, { useState, useEffect } from "react";

const Title = ({ title }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        const index = Math.floor(Math.random() * title.length);
        if (!prev.includes(index)) {
          return [...prev, index];
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <h1 className="title">
      {title.split("").map((char, index) => (
        <span
          key={index}
          className={visibleLetters.includes(index) ? "visible" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default Title;
