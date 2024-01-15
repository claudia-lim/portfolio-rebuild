import { useState } from 'react'
import './App.css'
import NavBarTemplate from "./components/NavBarTemplate/index.jsx";
import HeaderTemplate from "./components/HeaderTemplate/index.jsx";
import SkillsTemplate from "./components/SkillsTemplate/index.jsx";
import AboutTemplate from "./components/AboutTemplate/index.jsx";
import ProjectsTemplate from "./components/ProjectsTemplate/index.jsx";
import ContactTemplate from "./components/ContactTemplate/index.jsx";

function App() {
  const [count, setCount] = useState(0)

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

      </>
  )
}

export default App
