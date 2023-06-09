import React from "react";
import { Link } from "react-scroll";

import "../css/NavBar.scss";
import "../css/Main.scss";

const NavBar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div role="button" className="name" tabIndex={0}>
            Lana McKay ✨
          </div>
          <div className="links-wrapper">
            <button>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </button>
            <button>
              <Link to="work" spy={true} smooth={true}>
                Work Experience
              </Link>
            </button>
            <button>
              <Link to="experience" spy={true} smooth={true}>
                Projects
              </Link>
            </button>
            {/* <button>
              <Link to="knowledge" spy={true} smooth={true}>
              Knowledge
              </Link>
            </button> */}
            <button>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
