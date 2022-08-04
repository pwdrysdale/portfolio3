import { about } from "./Info"
import { About as AbtType } from "../types"

export default function About() {
  return (
    <div className="about">
      <h1 className="text-3xl font-bold">About</h1>
      {about.map((item: AbtType) => {
        return (
          <div className="about-item" key={item.section}>
            <h2 className="text-2xl font-bold">{item.section}</h2>
            <p>{item.blurb}</p>
          </div>
        )
      })}
    </div>
  )
}
