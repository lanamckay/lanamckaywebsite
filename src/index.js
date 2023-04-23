import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Layout from "./components/Layout";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Knowledge from "./components/Knowledge";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Experience></Experience>
      <Knowledge></Knowledge>
      <Contact></Contact>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
