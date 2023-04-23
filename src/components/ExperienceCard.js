import { Code } from "@chakra-ui/react";
import React from "react";
import "../css/ExperienceCard.scss";

const Card = ({ heading, paragraph, imagePic, urlLink, heading2, bottom, urlLink2 }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0)100%, rgba(0, 0, 0, 1)),url(" +
          imagePic +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <h2 className="header2">{heading2}</h2>
        <p className="text">{paragraph}</p>
        <a
          href={urlLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
          
        </a>
        <a
          href={urlLink2}
          target="_blank"
          rel="noopener noreferrer"
          className="btn2"
        >
          DevPost
        </a>
        <h3 className="bottom">{bottom}</h3>
      </div>
    </div>
  );
};

export default Card;
