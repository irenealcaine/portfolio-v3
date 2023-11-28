"use client";
import "./Card.scss";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/next.svg";
import { DarkModeContext } from "@/Context/darkModeContext";
import { useContext } from "react";

const Card = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`card ${darkMode ? "dark" : ""} ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>Title</h3>
      {isOpen ? (
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="g"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            delectus praesentium consectetur repellendus fuga, debitis corporis
            perferendis ea expedita ad molestias consequatur, voluptate
            voluptatem, sed minus qui mollitia. Culpa, magni?
          </p>
        </div>
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="g"
        />
      )}

      {/* <Image
        alt="Mountains"
        src={logo}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      /> */}
    </div>
  );
};

export default Card;
