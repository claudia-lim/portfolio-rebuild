import { useState } from 'react'
import './App.css'
import NavBarTemplate from "./components/NavBarTemplate/index.jsx";
import HeaderTemplate from "./components/HeaderTemplate/index.jsx";
import SkillsTemplate from "./components/SkillsTemplate/index.jsx";
import AboutTemplate from "./components/AboutTemplate/index.jsx";
import ProjectsTemplate from "./components/ProjectsTemplate/index.jsx";
import ContactsTemplate from "./components/ContactsTemplate/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <NavBarTemplate/>
          <HeaderTemplate />
          <SkillsTemplate />
          <AboutTemplate />
          <ProjectsTemplate />
          <ContactsTemplate />

          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
          </div>
      </>
  )
}

export default App
