import { projects } from "./Info"
import { Project as PrjType } from "../types"

// export type Project = {
//   name: string
//   description: string
//   technologies: string
//   date: string
//   image: string
//   proudPart: string
//   projectLink: Link
//   codeLink?: Link
// }

export default function Projects() {
  return (
    <div className="home">
      <h1 className="text-3xl font-bold">Projects</h1>
      {projects.map((item: PrjType) => {
        return (
          <div className="projects-item" key={item.name}>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.technologies}</p>
            <p>{item.date}</p>
            <p>{item.proudPart}</p>
            <a href={item.projectLink.url} target="_blank">
              {item.projectLink.url}
            </a>
          </div>
        )
      })}
    </div>
  )
}
