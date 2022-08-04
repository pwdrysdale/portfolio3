import { skills } from "./Info"
import { Skill as SkType } from "../types"

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="text-3xl font-bold">Skills</h1>
      <p>Skills</p>
      {skills.map((item: SkType) => {
        return (
          <div className="skills-item" key={item.name}>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}
