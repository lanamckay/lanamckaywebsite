import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Card from "./ExperienceCard";
import info from "../information/experienceInfo.js";

import "../css/Experience.scss";
import "../css/Main.scss";

const Experience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="experience-container">
          <FadeIn bottom cascade>
            <h1>Projects</h1>
          </FadeIn>
          <div className="experience-grid">
            {info.experience.map((experience, index) => (
              <div className="experience" key={index}>
                
                <FadeIn bottom cascade>
                <Card
                  key={index}
                  heading={experience.title}
                  heading2={experience.title2}
                  paragraph={experience.para}
                  imagePic={experience.image}
                  urlLink={experience.url}
                  urlLink2={experience.url2}
                  bottom={experience.bottom}

                ></Card>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
