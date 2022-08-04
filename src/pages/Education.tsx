import { education } from "./Info"
import { Education as EduType } from "../types"

export default function Education() {
  return (
    <div className="home">
      <h1 className="text-3xl font-bold">Education</h1>
      {education.map((item: EduType) => {
        return (
          <div className="education-item" key={item.place}>
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
