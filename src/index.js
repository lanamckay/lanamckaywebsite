import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Contact from "./components/Contact";



ReactDOM.render(
  <React.StrictMode>
    <Layout>
    <Contact></Contact>
    </Layout>

  </React.StrictMode>,
  document.getElementById("root")
);
