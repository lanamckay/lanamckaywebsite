import React from "react";
import knowledgeInfo from "../information/knowledgeInfo.js";
import FadeIn from "react-fade-in/lib/FadeIn";

import "../css/Work.scss";
import "../css/Knowledge.scss";

const Knowledge = () => {
  return (
    <div className="section" id="knowledge">
      <div className="container">
        <div className="knowledge-container">
          <FadeIn bottom cascade>
            <h1>Knowledge</h1>
          </FadeIn>
          <div className="knowledge-grid">
            {knowledgeInfo.knowledge.map((knowledge, index) => (
              <div className="knowledge" key={index}>
                <img src={knowledge.img} alt="css"></img>
                <p>{knowledge.para}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
