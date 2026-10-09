import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import hero_img from "../../assets/hero.png";

export const Hero = () => {
  return (
    <div className="hero container" id="Hero">
      <div className="hero-copy">
        <span className="hero-eyebrow">Playful learning</span>
        <h1>
          Build brighter futures with <span>confident learning.</span>
        </h1>
        <p>
          Our curriculum blends academic rigor with practical mentorship so
          students gain the knowledge, confidence, and real-world skills to grow
          in a changing world.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">
            Get started <img src={dark_arrow} alt="" />
          </button>
          <button className="btn btn-secondary">View programs</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>12k+</strong>
            <span>Students</span>
          </div>
          <div className="hero-stat">
            <strong>98%</strong>
            <span>Success</span>
          </div>
          <div className="hero-stat">
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img src={hero_img} alt="Students learning together" />
      </div>
    </div>
  );
};
