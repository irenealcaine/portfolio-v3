import React from "react";
import Image from "next/image";
import "./Card.scss";
import logo from "../../../public/next.svg";

const Card = () => {
  return (
    <div className={`card`}>
      <h3>Title asgasg asfsys tjtjdhdh</h3>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="g"
      />
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus
        praesentium consectetur repellendus fuga, debitis corporis perferendis
        ea expedita ad molestias consequatur, voluptate voluptatem, sed minus
        qui mollitia. Culpa, magni?
      </p>
    </div>
  );
};

export default Card;
