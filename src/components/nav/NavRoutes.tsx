import { Routes } from "../../types/routes"

import About from "../../pages/About"
import WorkExperience from "../../pages/WorkExperience"
import Home from "../../pages/Home"
import Projects from "../../pages/Projects"
import Education from "../../pages/Education"
import Skills from "../../pages/Skills"

export const routes: Routes[] = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/about", label: "About", element: <About /> },
  { path: "/skills", label: "Skills", element: <Skills /> },
  { path: "/projects", label: "Projects", element: <Projects /> },
  { path: "/education", label: "Education", element: <Education /> },
  {
    path: "/work-experience",
    label: "Work Experience",
    element: <WorkExperience />,
  },
]
