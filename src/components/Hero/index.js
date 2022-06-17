import React from "react";
import "./assets/style.scss";

function Hero() {
  return (
    <div className="container pt-4 hero-container">
      <div className="hero-wrapper">
        <div className="hero-header-wrapper">
          <h1 className="hero-head">
            El mercado de las frutas
          </h1>

          <h4 className="hero-text">
            Nos especializamos en Manzanas, Limones, fresas, tomates.
          </h4>
          <button className="hero-btn">Mercado</button>
        </div>

        <div className="hero-img-wrapper">
          {" "}
          <img
            className="hero-img img-responsive"
            src={require("./assets/apples.jpg")}
            alt="Bana Leaf image"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
