import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./TopBar/top_bar";
import Home from "./Home/Home";
import AboutMe from "./About Me/about_me";
import Skills from "./Skills/skills";
import Project from "./Project/project"

const sections = [
  {id:'section1',label:'Home'},
  {id:'section2',label:'About Me'},
  {id:'section3',label:'Skills'},
  {id:'section4',label:'Projects'},
]

function App() {
  const handleNavClick =(id:string)=>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
    
  }
  return (
    <div>
      <Header  sections={sections} onNavClick={handleNavClick}/>
      <Home id="section1"  />
      <AboutMe id="section2" />
      <Skills  id="section3"/>
      <Project id="section4"/>
      {/* <Routes>
        <Route path="/" element={[<Header key="header" />, <Home key="home" />, <AboutMe key="aboutMe" />, <Skills key="sklls" />, <Project key="project"/>]} />
      </Routes> */}
    </div>
  );
}

export default App;