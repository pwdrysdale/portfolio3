import "./input.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { routes } from "./components/nav/NavRoutes"
import { Routes as RouteType } from "./types/routes"
import Layout from "./components/Layout"

export default function App() {
  return (
    <div className="app">
      <Router>
        <Layout />
        <div className="routes">
          <Routes>
            {routes.map((route: RouteType) => (
              <Route key={route.path} path={route.path} element={route.element}>
                {route.label}
              </Route>
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  )
}
