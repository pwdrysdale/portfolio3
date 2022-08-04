import { work } from "./Info"
import { Work as WkType } from "../types"

export default function WorkExperience() {
  return (
    <div className="work-experience">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      {work.map((item: WkType) => {
        return (
          <div className="work-item" key={item.place}>
            <h2 className="text-2xl font-bold">{item.place}</h2>
            <h3>{item.time}</h3>
            {item.paragraphs.map((paragraph: string) => {
              return <p>{paragraph}</p>
            })}
          </div>
        )
      })}
    </div>
  )
}
