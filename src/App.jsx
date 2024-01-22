import { useState } from 'react'
import './App.css'
import NavBarTemplate from "./components/NavBarTemplate/index.jsx";
import HeaderTemplate from "./components/HeaderTemplate/index.jsx";
import SkillsTemplate from "./components/SkillsTemplate/index.jsx";
import AboutTemplate from "./components/AboutTemplate/index.jsx";
import ProjectsTemplate from "./components/ProjectsTemplate/index.jsx";
import ContactTemplate from "./components/ContactTemplate/index.jsx";

function App() {

  return (
      <>
          <a id="home"></a>
          <NavBarTemplate/>
          <HeaderTemplate />
          <main>
              <SkillsTemplate />
              <AboutTemplate />
              <ProjectsTemplate />
              <ContactTemplate />
          </main>
          <footer>-Claudia Lim 2024-</footer>

      </>
  )
}

export default App
