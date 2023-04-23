import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import lana from "../images/lanamckay.png";

import "../css/AboutMe.scss";
import "../css/Main.scss";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <FadeIn bottom>
              <h1> About Me </h1>
            </FadeIn>
            <p>
              I'm a 3rd year student at the University of Waterloo studying Systems Design Engineering 💻
              <br></br>
              <br></br>
              Through my involvement in personal projects, hackathons, and work experience at Empire Life and Manulife, I have gained valuable experience working in software development and product management.
              <br></br>
              <br></br>
              During my free time you can find me at the gym, travelling, eating good foods, or hanging out with my dog! {" "}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={lana} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;