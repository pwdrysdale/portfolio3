import { FC } from "react"
import { Link } from "react-router-dom"
import { routes } from "./NavRoutes"
import { Routes } from "../../types/routes"

type QuickNavProps = {
  setMenuOpen: (isOpen: boolean) => void
}

const QuickNav: FC<QuickNavProps> = ({ setMenuOpen }) => {
  return (
    <div
      className="quick-nav"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {routes.map((route: Routes) => (
        <Link to={route.path} key={route.path}>
          <div className="quick-nav__item">{route.label}</div>
        </Link>
      ))}
    </div>
  )
}

export default QuickNav
