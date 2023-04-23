import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import contact from "../information/contactInfo.js";

import "../css/Contact.scss";
import "../css/Main.scss";


const Contact = () => {
  return (
    <div classname="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <FadeIn bottom cascade>
            <h1>Contact</h1>
            <center>
              <h3>let's connect :)</h3>
              
            </center>
          </FadeIn>

          <div className="icons">
            {contact.social.map((socialLink, index) => (
              <div className="social-icons">
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
