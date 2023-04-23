import React from "react";
import FadeIn from "react-fade-in";

import "../css/Header.scss";
import "../css/Main.scss";

const Header = () => {
  return (
    <div className="section" id="home"
    >
      <div className="container">
        <div className="header-wrapper">
          <FadeIn bottom>
            <h2>
              Hello, nice to meet you 
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </FadeIn>
          <FadeIn bottom cascade>
            <div className="heading-wrapper">
              <h1>I'm Lana McKay</h1>
            </div>
          </FadeIn>

          <FadeIn bottom>
            <p>
              3rd Year Systems Design Engineering student @ the University of Waterloo
            </p>
          </FadeIn>
          <FadeIn bottom>
            <a
              className="button"
              href=""
            >
              View Resume
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
