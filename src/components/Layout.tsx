import { useState } from "react"

import QuickNav from "./nav/QuickNav"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="layout">
      <h4>Peter Drysdale</h4>
      <div className="layout__buttons">
        <a
          href="https://www.linkedin.com/in/peter-drysdale-06a9b533/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/pwdrysdale" target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com/pwdrysdale" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href="mailto:pwdrysdale@gmail.com">
          <BiEnvelope />
        </a>
        <AiOutlineMenu
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        />
        {menuOpen && <QuickNav setMenuOpen={setMenuOpen} />}
      </div>
    </div>
  )
}
