import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./TopBar/top_bar";
import Home from "./Home/Home";
import AboutMe from "./About Me/about_me";
import Skills from "./Skills/skills";
import Project from "./Project/project"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<Header key="header" />, <Home key="home" />, <AboutMe key="aboutMe" />, <Skills key="sklls" />, <Project key="project"/>]} />
      </Routes>
    </div>
  );
}

export default App;